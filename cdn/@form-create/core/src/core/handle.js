import {
    $del,
    $set, deepExtend,
    errMsg,
    extend,
    isString,
    isUndef,
    isValidChildren,
    isPlainObject,
    toLine,
    toString,
    uniqueId,
    isFunction
} from '@form-create/utils';
import BaseParser from '../factory/parser';
import Render from './render';
import Api from './api';
import {copyRule, enumerable} from './util';


export function getRule(rule) {
    if (isFunction(rule.getRule))
        return rule.getRule();
    else
        return rule;
}

export default class Handle {

    constructor(fc) {
        const {vm, rules, options} = fc;

        this.watching = false;
        this.vm = vm;
        this.fc = fc;
        this.options = options;

        this.validate = {};
        this.formData = {};
        this.subForm = {};

        this.fCreateApi = undefined;

        this.__init(rules);
        this.$form = new fc.drive.formRender(this);
        this.$render = new Render(this);

        this.loadRule(this.rules, false);

        this.$render.initOrgChildren();

        this.$form.init();
    }

    __init(rules) {
        this.fieldList = {};
        this.trueData = {};
        this.parsers = {};
        this.customData = {};
        this.sortList = [];
        this.rules = rules;
        this.origin = [...this.rules];
        this.changeStatus = false;
    }

    loadRule(rules, child) {
        rules.map((_rule, index) => {
            if (child && isString(_rule)) return;

            if (!_rule.type)
                return console.error('未定义生成规则的 type 字段' + errMsg());

            let parser;

            if (_rule.__fc__) {
                parser = _rule.__fc__;

                //规则在其他 form-create 中使用,自动浅拷贝
                if (parser.vm !== this.vm && !parser.deleted) {
                    _rule = copyRule(_rule);
                    rules[index] = _rule;
                    parser = this.createParser(this.parseRule(_rule));
                } else {
                    parser.update(this);
                    let rule = parser.rule;
                    this.parseOn(rule);
                    this.parseProps(rule);
                }
            } else {
                parser = this.createParser(this.parseRule(_rule));
            }

            let children = parser.rule.children, rule = parser.rule;
            if (!this.notField(parser.field))
                return console.error(`${rule.field} 字段已存在` + errMsg());

            this.setParser(parser);

            if (!_rule.__fc__) {
                bindParser(_rule, parser);
            }
            if (isValidChildren(children)) {
                this.loadRule(children, true);
            }

            if (!child) {
                this.sortList.push(parser.id);
            }

            if (!this.isNoVal(parser))
                Object.defineProperty(parser.rule, 'value', {
                    get: () => {
                        return parser.toValue(this.getFormData(parser));
                    },
                    set: (value) => {
                        if (this.isChange(parser, value)) {
                            this.$render.clearCache(parser, true);
                            this.setFormData(parser, parser.toFormValue(value));
                            this.valueChange(parser);
                            this.refresh();
                        }
                    }
                });

            return parser;
        }).filter(h => h).forEach(h => {
            h.root = rules;
        });
    }

    createParser(rule) {
        const id = '' + uniqueId(), parsers = this.fc.parsers, type = toString(rule.type).toLocaleLowerCase();

        const Parser = (parsers[type]) ? parsers[type] : BaseParser;

        return new Parser(this, rule, id);
    }

    parseRule(_rule) {
        const def = defRule(), rule = getRule(_rule);

        Object.defineProperties(rule, {
            __origin__: enumerable(_rule)
        });

        Object.keys(def).forEach(k => {
            if (isUndef(rule[k])) $set(rule, k, def[k]);
        });

        if (rule.field && this.options.formData[rule.field] !== undefined)
            rule.value = this.options.formData[rule.field];

        rule.options = parseArray(rule.options);
        this.parseOn(rule);
        this.parseProps(rule);

        return rule;
    }

    parseOn(rule) {
        this.parseInjectEvent(rule, rule.on || {});
        if (!this.watching) {
            this.margeEmit(rule);
        }
    }

    margeEmit(rule) {
        const emitEvent = this.parseEmit(rule);
        if (Object.keys(emitEvent).length > 0) extend(rule.on, emitEvent);
    }

    parseProps(rule) {
        this.parseInjectEvent(rule, rule.props || {});
    }

    parseInjectEvent(rule, on) {
        if (this.options.injectEvent || rule.inject)
            Object.keys(on).forEach(k => {
                if (isFunction(on[k]))
                    on[k] = this.inject(rule, on[k])
            });
        return on;
    }

    getInjectData(self, inject) {
        const {option, rule} = this.vm.$options.propsData;
        return {
            $f: this.fCreateApi,
            rule,
            self: self.__origin__,
            option,
            inject: inject || rule.inject || {}
        };
    }

    inject(self, _fn, inject) {
        if (_fn.__inject) {
            if (this.watching)
                return _fn;
            _fn = _fn.__origin;
        }

        const h = this;

        const fn = function (...args) {
            args.unshift(h.getInjectData(self, inject));
            _fn(...args);
        };
        fn.__inject = true;
        fn.__origin = _fn;
        return fn;
    }

    parseEmit(rule) {
        let event = {}, {emit, emitPrefix, field} = rule;

        if (!Array.isArray(emit)) return event;

        emit.forEach(config => {
            let inject, eventName = config;
            if (isPlainObject(config)) {
                eventName = config.name;
                inject = config.inject;
            }
            if (!eventName) return;

            const emitKey = emitPrefix ? emitPrefix : field;
            const fieldKey = toLine(`${emitKey}-${eventName}`).replace('_', '-');

            const fn = (...arg) => {
                this.vm.$emit(fieldKey, ...arg);
            };
            fn.__emit = true;
            event[eventName] = (this.options.injectEvent || config.inject !== undefined) ? this.inject(rule, fn, inject) : fn;
        });

        return event;
    }

    run() {
        if (this.vm.unique > 0)
            return this.$render.run();
        else {
            this.vm.unique = 1;
            return [];
        }
    }

    setParser(parser) {
        let {id, field, name, rule} = parser;
        if (this.parsers[id])
            return;
        this.parsers[id] = parser;

        if (name)
            $set(this.customData, name, parser);

        if (this.isNoVal(parser)) return;
        this.fieldList[field] = parser;
        $set(this.formData, field, parser.toFormValue(rule.value));
        $set(this.validate, field, rule.validate || []);
        $set(this.trueData, field, parser);
    }

    addSubForm(parser, subForm) {
        this.subForm[parser.field] = subForm;
    }

    notField(field) {
        return this.fieldList[field] === undefined;
    }

    isChange(parser, value) {
        return JSON.stringify(parser.rule.value) !== JSON.stringify(value);
    }

    valueChange(parser) {
        validateControl(parser);
    }

    onInput(parser, value) {
        if (!this.isNoVal(parser) && this.isChange(parser, parser.toValue(value))) {
            this.$render.clearCache(parser);
            this.setFormData(parser, value);
            this.changeStatus = true;
            this.valueChange(parser);
        }
    }

    getParser(id) {
        if (this.fieldList[id])
            return this.fieldList[id];
        else if (this.customData[id])
            return this.customData[id];
        else if (this.parsers[id])
            return this.parsers[id];
    }

    created() {
        const vm = this.vm;

        vm.$set(vm, 'buttonProps', this.options.submitBtn);
        vm.$set(vm, 'resetProps', this.options.resetBtn);
        vm.$set(vm, 'formData', this.formData);


        if (this.fCreateApi === undefined)
            this.fCreateApi = Api(this);
        this.fCreateApi.rule = this.rules;
        this.fCreateApi.config = this.options;
    }


    addParserWitch(parser) {
        const vm = this.vm;

        Object.keys(parser.rule).forEach((key) => {
            if (['field', 'type', 'value', 'vm', 'template', 'name', 'config', 'control'].indexOf(key) !== -1 || parser.rule[key] === undefined) return;
            try {
                parser.watch.push(vm.$watch(() => parser.rule[key], (n, o) => {
                    if (o === undefined) return;
                    this.watching = true;
                    if (key === 'validate')
                        this.validate[parser.field] = n;
                    else if (key === 'props')
                        this.parseProps(parser.rule);
                    else if (key === 'on')
                        this.parseOn(parser.rule);
                    else if (key === 'emit')
                        this.margeEmit(parser.rule);

                    this.$render.clearCache(parser);
                    this.watching = false;
                }, {deep: key !== 'children', immediate: true}));
            } catch (e) {
                //
            }
        });
    }

    refreshControl(parser) {
        if (!this.isNoVal(parser) && parser.rule.control) {
            validateControl(parser);
        }
    }

    mountedParser() {
        const vm = this.vm;
        Object.keys(this.parsers).forEach((id) => {
            let parser = this.parsers[id];
            if (parser.watch.length === 0) this.addParserWitch(parser);
            this.refreshControl(parser);
            parser.el = vm.$refs[parser.refName] || {};

            if (parser.defaultValue === undefined)
                parser.defaultValue = deepExtend({}, {value: parser.rule.value}).value;

            parser.mounted && parser.mounted();
        });
    }

    mounted() {
        const mounted = this.options.mounted;

        this.mountedParser();

        mounted && mounted(this.fCreateApi);
        this.fc.$emit('mounted', this.fCreateApi);
    }

    reload() {
        const onReload = this.options.onReload;

        this.mountedParser();

        onReload && onReload(this.fCreateApi);
        this.fc.$emit('on-reload', this.fCreateApi);
    }

    removeField(parser, value) {
        const {id, field} = parser, index = this.sortList.indexOf(id);

        delParser(parser, value);
        $del(this.parsers, id);

        if (index !== -1) {
            this.sortList.splice(index, 1);
        }

        if (!this.fieldList[field]) {
            $del(this.validate, field);
            $del(this.formData, field);
            $del(this.customData, field);
            $del(this.fieldList, field);
            $del(this.trueData, field);
        }

        if (this.subForm[parser.field])
            $del(this.subForm, field);

        return parser;
    }

    refresh() {
        this.vm._refresh();
    }

    reloadRule(rules) {
        const vm = this.vm;
        if (!rules) return this.reloadRule(this.rules);
        if (!this.origin.length) this.fCreateApi.refresh();
        this.origin = [...rules];

        const parsers = {...this.parsers};
        const formData = this.fCreateApi.formData();
        this.__init(rules);
        this.loadRule(rules, false);
        Object.keys(parsers).filter(id => this.parsers[id] === undefined)
            .forEach(id => this.removeField(parsers[id], formData[parsers[id].field]));
        this.$render.initOrgChildren();
        this.formData = {...this.formData};
        this.created();

        vm.$f = this.fCreateApi;
        this.$render.clearCacheAll();
        this.refresh();

        vm.$nextTick(() => {
            this.reload();
        });

    }

    setFormData(parser, value) {
        $set(this.formData, parser.field, value);
    }

    getFormData(parser) {
        return this.formData[parser.field];
    }

    fields() {
        return Object.keys(this.formData);
    }

    isNoVal(parser) {
        return !parser.isDef;
    }

}

export function delParser(parser, value) {
    if (parser.ctrlRule)
        removeControl(parser);
    parser.watch.forEach((unWatch) => unWatch());
    parser.watch = [];
    parser.deleted = true;
    parser.root = [];
    Object.defineProperty(parser.rule, 'value', {
        value
    });
}

function parseArray(validate) {
    return Array.isArray(validate) ? validate : [];
}

function getControl(parser) {
    const control = parser.rule.control || [];
    if (isPlainObject(control)) return [control];
    else return control;
}

function validateControl(parser) {
    const controls = getControl(parser), len = controls.length, ctrlRule = parser.ctrlRule;
    if (!len) return;
    for (let i = 0; i < len; i++) {
        const control = controls[i], validate = control.handle || (val => val === control.value);
        if (validate(parser.rule.value)) {
            if (ctrlRule) {
                if (ctrlRule.children === control.rule)
                    return;
                else
                    removeControl(parser);
            }
            const rule = {
                type: 'div',
                native: true,
                children: control.rule
            };
            parser.root.splice(parser.root.indexOf(parser.rule.__origin__) + 1, 0, rule);
            parser.ctrlRule = rule;
            return;
        }
    }
    if (ctrlRule) {
        removeControl(parser);
    }
}

function removeControl(parser) {
    const index = parser.root.indexOf(parser.ctrlRule);
    if (index !== -1)
        parser.root.splice(index, 1);
    parser.ctrlRule = null;
}


function defRule() {
    return {
        validate: [],
        col: {},
        emit: [],
        props: {},
        on: {},
        options: [],
        title: undefined,
        value: null,
        field: '',
        name: undefined,
        className: undefined
    };
}

function bindParser(rule, parser) {
    Object.defineProperties(rule, {
        __field__: enumerable(parser.field),
        __fc__: enumerable(parser)
    });
}
