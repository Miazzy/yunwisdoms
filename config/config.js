const indexKey = `/dashboard/analysis`;
const workplaceKey = `/dashboard/workplace`;
const centerKey = `/account/center`;
const blogKey = `/blog/centerlist`;
const taskKey = `/task/center`;
const documentKey = `/document/center`;
const musicKey = `/task/5bda534e2b8da95b12aec4f207dd6996`;
const docKey = `/task/59f3d7da4716cdb57c527da1486e70f3`;
const yunpanKey = `/task/c6565e2db9b1c70ed962cf5b2ac5d29b`;
const sourceKey = `/task/c8fcdc16dd5d951a370ab5fb608fc749`;
const wallKey = `/task/3b94800bd3640cb0f8d4a924ee2b80d2`;
const companyPanKey = `/task/ebcb9530b3caa9d5eefd87acb7e8fcfe`;
const webchatKey = `/task/52a23d6fa2eb0609eb8c51f46f7f3d7d`;

var titleKV = {
    "0b511f234f3847baa50106a14fff6215": "审批处理",
    b0ceb7cfb2b0487a96e03f50c413d762: "请假申请",
    "933e21cf445440abb8cfdae366082a62": "外出申请",
    "9ed5bc42eb934bbe8dac16ed1a3b103f": "加班申请",
    b0fee76c2ee84baeb9494b196b779e3e: "考勤异常",
    "3da23c7955d84465a759d0f1830a0d00": "档案及证照借阅",
    cfd4ee2d60fa48f585c157d524b0a108: "用印申请(非合同)",
    dd78c4c8a59e4ee3bd93ec011a3f6b4c: "用印申请(合同)",
    e412b58db17b4cbf8cb9833c118c2d3b: "印章借用",
    "62f7122c73c244119e5d4ec8aa170a3d": "出差申请",
    "3972c2cb5a824aaab8ef0aad3ea56e7f": "行政公告",
    c9c7e537dbb54691b4f0eff23854fdbb: "红头文件",
    ebe9412bb4f34b5c8ea3fb7c0908d315: "新闻资讯",
    "6650f6e79479489192fe469d1e3f98f3": "奖罚通报",
    "6bfb3ee6257a4066b1d26f195da83fe0": "车辆补贴",
    "688a9ea8187d461e9e921fd5a5829201": "日报管理",
    "9c4bf0f4951b44648659a34ead5d31cc": "周报管理",
    "6bf6537008514d319a95330459464f3e": "月报管理",
    "878dd1f28f0b4dfdaa74534eec902c0c": "年度汇报",
    "02c2e82c486542df992c3860ad6cd25a": "名册管理",
    "237fa97d3c974bdbb36090d0dd2f3a39": "工资管理",
    "079c6dd6140c4b269e9bf8601deef901": "团队管理",
    "89237955a75f4d8c8cb15d30592628fd": "季度汇报",
    "5480de4b82db4b40be8af021caeb6d30": "汇报管理",
    "7542962e9a31442eb9e4ddd887891f81": "费用报销",
    f48cb4862fde439e9a43ca6c9a7102d3: "付款申请",
    c23f27d4e1b54b48bc88b4c532ab0dea: "采购申请",
    "0ed85356f7f04e048bc540b0047c7559": "用章申请",
    c990e98e13124c91aabec84ae149e423: "备用金申请",
    e7ee0cd851454ed1a17454c31116b012: "物品领用",
    dae6cc0e7a7f4b7e9dc0fc36757fdc96: "审批历史",
    c98940fae2404cacb6ed4bd0aeffbc6d: "我的计划",
    a10f38d1c64343f39560061e4124ba44: "我的任务",

};

//设置表单配置
var tableConfig = {
    BS_LEAVE: '请假流程申请单',
    BS_EGRESS: '外出流程申请单',
    BS_OVERTIME: '加班流程申请单',
    BS_ATTENDANCE: '考勤异常流程申请单',
    BS_RECORD_BORROW: '档案及证照借阅申请单',
    BS_SEAL_NORMAL: '用印申请流程申请单',
    BS_SEAL_CONTRACT: '用印申请流程申请单',
    BS_SEAL_DECLARE: '印章借用申请单',
    BS_TRAVEL: '出差申请单',
    BS_MARKET_INFO: '市场观察表',
    BS_NOTICE: '奖罚通报表',
    BS_NEWS: '新闻资讯表',
    BS_ANNOUNCE: '行政公告表',
    BS_REDHEAD: '红头文件表',
    BS_ISSUE: '问题反馈表',
    BS_TRAFFIC_ALLOWANCE: '车辆补贴申请表',
    BS_TRANSACTION: '流程事务处理表',
    BS_REIM: '费用报销申请表',
    BS_PURCHASE: '采购申请表',
    BS_OFFICIAL_SEAL: '用章申请表',
    BS_RESERVE: '备用金申请表',
    BS_PURCHASE_ITEM: '采购申请明细表',
    BS_MIREANNA: '物品领用表',
    BS_MIREANNA_ITEM: '物品领用明细表',
    BS_PLAN_TASK: '计划任务表',
    BS_PLAN_TASK_ITEM: '计划任务明细表',
    BS_PLAN_TASK_MISSION: '计划任务完成表',
    BS_DOCUMENT: '文档表',
    BS_DOCUMENT_ITEM: '文档明细表',
    BS_PAYMENT: '付款申请表',
    BS_REIM_ITEM: '费用报销明细表',
    BS_REPORT_JOB_LOGGING: '工作汇报表',
    BS_QUARTER_JOB_LOGGING: '季报工作记录表',
    BS_ASK_REPORT: '请示报告审批表',
    BS_WORK_CONTACT: '工作联系单',
    PEAR_TEAM: '团队表',
    BS_QUESTIONS_RS: '问卷结果表',
    BS_QUESTIONS: '问卷表',
    BS_USER_INFO: '用户名册',
    BS_BLOGGER: '博主表',
    BS_REGISTOR: '花名册表',
    BS_SALARY: '工资表',
    BS_BLOG: '博文表',
    BS_COMMENTS: '评论表',
    BS_TASK_ASSIGN: '任务分配表',
    BS_DYNAMIC: '动态信息表',
    BS_TEAM: '团队表',
    BS_ABILITY_QUOTA: '综合素质指标表',
    BS_YEAR_JOB_LOGGING: '年报工作记录表',
    BS_MONTH_JOB_LOGGING: '月报工作记录表',
    BS_WEEK_JOB_LOGGING: '周报工作记录表',
    BS_FAVOR_INFO: '业务收藏表',
    BS_FREE_PROCESS: '自由流程配置表',
    PR_LOG_INFORMED: '流程审批知会表',
    PR_LOG_HISTORY: '流程审批日志历史表',
    BS_APPROVE_NODE: '流程权责审批节点表',
    BS_TASK_LOGGING: '任务管理表',
    BS_PROJECT_LOGGING: '项目管理表',
    BS_PRODUCT_LOGGING: '产品管理表',
    BS_BUG_LOGGING: 'BUG管理表',
    BS_JOB_LOGGING: '日报工作记录表',
    BS_REQUIREMENT: '需求管理表',
    BS_ATTENDANCE_DETAILS: '考勤异常明细表',
    PR_RIGHTS: '流程权限表',
    PR_TEMPLATE: '流程模板表',
    BS_APPROVE: '审批业务处理表',
    BS_RECRUIT: '招聘申请表',
    BS_RESIGN: '离职申请表',
    BS_SIGN: '入职申请表',
    BS_REGULAR_APPLY: '转正申请表',
    BS_SHIFTS_APPLY: '换班申请表',
    BS_REPAIR_APPLY: '补卡申请表',
    BS_CAR_APPLY: '用车申请表',
    BS_APPROVE_GENERAL: '审批申请表',
    PR_LOG: '流程审批日志表'
};

//请假类型配置信息
var leaveTypeConfig = {
    affairs_leave: '事假',
    sick_leave: '病假',
    marital_leave: '婚假',
    funeral_leave: '丧假',
    maternity_leave: '产假',
    paternity_leave: '陪产假',
    annual_leave: '年假',
    wr_injury_leave: '工伤假',
    other_leave: '其他',
};

//流程状态配置信息
var bpmStatus = {
    '1': '待提交',
    '2': '审核中',
    '3': '审批中',
    '4': '已完成',
    '5': '已完成',
    '10': '已作废',
    '99': '已作废',
};

//表单类型名称配置信息
var formTypeNameConfig = {
    BS_LEAVE: '请假',
    BS_EGRESS: '外出',
    BS_OVERTIME: '加班',
    BS_ATTENDANCE: '考勤',
    BS_RECORD_BORROW: '借阅',
    BS_SEAL_NORMAL: '用印',
    BS_SEAL_CONTRACT: '用印',
    BS_SEAL_DECLARE: '印章',
    BS_TRAVEL: '出差',
    BS_MARKET_INFO: '公告',
    BS_NOTICE: '公告',
    BS_NEWS: '新闻',
    BS_ANNOUNCE: '公告',
    BS_REDHEAD: '红头',
    BS_ISSUE: '反馈',
    BS_TRAFFIC_ALLOWANCE: '车补',
    BS_TRANSACTION: '流程',
    BS_REIM: '报销',
    BS_PURCHASE: '采购',
    BS_OFFICIAL_SEAL: '用章',
    BS_RESERVE: '备用金',
    BS_PURCHASE_ITEM: '采购',
    BS_MIREANNA: '领用',
    BS_MIREANNA_ITEM: '领用',
    BS_PLAN_TASK: '计划',
    BS_PLAN_TASK_ITEM: '计划',
    BS_DOCUMENT: '文档',
    BS_DOCUMENT_ITEM: '文档',
    BS_PAYMENT: '付款',
    BS_REIM_ITEM: '报销',
    BS_REPORT_JOB_LOGGING: '汇报',
    BS_QUARTER_JOB_LOGGING: '季度汇报',
    PEAR_TEAM: '团队',
    BS_QUESTIONS_RS: '问卷结果',
    BS_QUESTIONS: '问卷',
    BS_USER_INFO: '名册',
    BS_BLOGGER: '博主',
    BS_REGISTOR: '名册',
    BS_SALARY: '工资',
    BS_BLOG: '博文',
    BS_COMMENTS: '评论',
    BS_TASK_ASSIGN: '任务',
    BS_DYNAMIC: '动态',
    BS_TEAM: '团队',
    BS_ABILITY_QUOTA: '指标',
    BS_YEAR_JOB_LOGGING: '年度汇报',
    BS_MONTH_JOB_LOGGING: '月度汇报',
    BS_WEEK_JOB_LOGGING: '周报',
    BS_FAVOR_INFO: '业务收藏',
    BS_FREE_PROCESS: '自由流程',
    PR_LOG_INFORMED: '流程',
    PR_LOG_HISTORY: '流程',
    BS_APPROVE_NODE: '流程',
    BS_TASK_LOGGING: '任务',
    BS_PROJECT_LOGGING: '项目',
    BS_PRODUCT_LOGGING: '产品',
    BS_BUG_LOGGING: 'BUG',
    BS_JOB_LOGGING: '日报',
    BS_REQUIREMENT: '需求',
    BS_ATTENDANCE_DETAILS: '考勤异常',
    PR_RIGHTS: '流程',
    PR_TEMPLATE: '流程模板',
    BS_APPROVE: '审批',
    PR_LOG: '流程'
}

//是否为主表配置信息
var formMainTypeConfig = {
    BS_LEAVE: false,
    BS_EGRESS: false,
    BS_OVERTIME: false,
    BS_ATTENDANCE: true,
    BS_WORK_CONTACT: true,
    BS_RECORD_BORROW: false,
    BS_SEAL_NORMAL: false,
    BS_SEAL_CONTRACT: false,
    BS_SEAL_DECLARE: false,
    BS_TRAVEL: false,
    BS_REIM: true,
    BS_MARKET_INFO: false,
    BS_NOTICE: false,
    BS_NEWS: false,
    BS_ANNOUNCE: false,
    BS_REDHEAD: false,
    BS_ISSUE: false,
    BS_TRAFFIC_ALLOWANCE: false,
    BS_TRANSACTION: false,
    BS_PURCHASE: true,
    BS_OFFICIAL_SEAL: false,
    BS_RESERVE: false,
    BS_PURCHASE_ITEM: false,
    BS_MIREANNA: true,
    BS_MIREANNA_ITEM: false,
    BS_PLAN_TASK: true,
    BS_PLAN_TASK_ITEM: false,
    BS_DOCUMENT: true,
    BS_DOCUMENT_ITEM: false,
    BS_PAYMENT: false,
    BS_REIM_ITEM: false,
    BS_REPORT_JOB_LOGGING: false,
    BS_QUARTER_JOB_LOGGING: false,
    PEAR_TEAM: false,
    BS_QUESTIONS_RS: false,
    BS_QUESTIONS: true,
    BS_USER_INFO: false,
    BS_BLOGGER: false,
    BS_REGISTOR: false,
    BS_SALARY: false,
    BS_BLOG: false,
    BS_COMMENTS: false,
    BS_TASK_ASSIGN: false,
    BS_DYNAMIC: false,
    BS_TEAM: false,
    BS_ABILITY_QUOTA: false,
    BS_YEAR_JOB_LOGGING: false,
    BS_MONTH_JOB_LOGGING: false,
    BS_WEEK_JOB_LOGGING: false,
    BS_FAVOR_INFO: false,
    BS_FREE_PROCESS: false,
    PR_LOG_INFORMED: false,
    PR_LOG_HISTORY: false,
    BS_APPROVE_NODE: false,
    BS_TASK_LOGGING: false,
    BS_PROJECT_LOGGING: false,
    BS_PRODUCT_LOGGING: false,
    BS_BUG_LOGGING: false,
    BS_JOB_LOGGING: false,
    BS_REQUIREMENT: false,
    BS_ATTENDANCE_DETAILS: false,
    PR_RIGHTS: false,
    PR_TEMPLATE: false,
    BS_APPROVE: false,
    PR_LOG: false
};

//类型名称配置消息
var formTypeValueConfig = {
    BS_LEAVE: '--',
    BS_EGRESS: '普通',
    BS_OVERTIME: '普通',
    BS_ATTENDANCE: '普通',
    BS_RECORD_BORROW: '普通',
    BS_SEAL_NORMAL: '非合同',
    BS_SEAL_CONTRACT: '合同',
    BS_SEAL_DECLARE: '印章',
    BS_TRAVEL: '出差',
    BS_PLAN_TASK: '计划',
};

//开始日期配置消息
var startTimeConfig = {
    BS_LEAVE: '开始',
    BS_EGRESS: '开始',
    BS_OVERTIME: '开始',
    BS_ATTENDANCE: '开始',
    BS_RECORD_BORROW: '借阅',
    BS_SEAL_NORMAL: '开始',
    BS_SEAL_CONTRACT: '开始',
    BS_SEAL_DECLARE: '开始',
    BS_TRAVEL: '开始',
    BS_PLAN_TASK: '开始',
};

//结束日期配置信息
var endTimeConfig = {
    BS_LEAVE: '结束',
    BS_EGRESS: '结束',
    BS_OVERTIME: '结束',
    BS_ATTENDANCE: '结束',
    BS_RECORD_BORROW: '归还',
    BS_SEAL_NORMAL: '结束',
    BS_SEAL_CONTRACT: '结束',
    BS_SEAL_DECLARE: '结束',
    BS_TRAVEL: '结束',
    BS_PLAN_TASK: '结束',
};

//文件名称配置消息
var fileNameConfig = {
    BS_LEAVE: '文件名称',
    BS_EGRESS: '文件名称',
    BS_OVERTIME: '文件名称',
    BS_ATTENDANCE: '文件名称',
    BS_RECORD_BORROW: '档案资料',
    BS_SEAL_NORMAL: '文件名称',
    BS_SEAL_CONTRACT: '文件名称',
    BS_SEAL_DECLARE: '文件名称',
    BS_TRAVEL: '文件名称',
};

var subTableFieldConfig = {
    BS_ATTENDANCE: [{
            title: '序号',
            dataIndex: 'no',
            width: '10%',
            align: 'center',
        },
        {
            title: '异常时间',
            dataIndex: 'adate',
            width: '35%',
            align: 'center',
        },
        {
            title: '异常类型',
            dataIndex: 'type',
            width: '20%',
            align: 'center',
        },
        {
            title: '异常说明',
            dataIndex: 'content',
            width: '35%',
            align: 'left',
        },
    ],
    BS_REIM: [{
            title: "序号",
            dataIndex: "no",
            width: '10%',
            align: 'center',
        },
        {
            title: '内容',
            dataIndex: 'content',
            width: '50%',
            align: 'center',
        },
        {
            title: '日期',
            dataIndex: 'date',
            width: '20%',
            align: 'center',
        },
        {
            title: '金额',
            dataIndex: 'money',
            width: '20%',
            align: 'center',
        },
    ],
    BS_PURCHASE: [{
            title: "序号",
            dataIndex: "no",
            width: '10%',
            align: 'center',
        },
        {
            title: "名称",
            dataIndex: "name",
            width: '10%',
            align: 'center',
        },
        {
            title: "规格",
            dataIndex: "eritelmat",
            width: '10%',
            align: 'center',
        },
        {
            title: "数量",
            dataIndex: "amount",
            width: '10%',
            align: 'center',
        },
        {
            title: "金额",
            dataIndex: "money",
            width: '10%',
            align: 'center',
        },
    ],
    BS_MIREANNA: [{
            title: "序号",
            dataIndex: "no",
            width: '10%',
            align: 'center',
        },
        {
            title: "名称",
            dataIndex: "name",
            width: '30%',
            align: 'center',
        },
        {
            title: "金额",
            dataIndex: "amount",
            width: '30%',
            align: 'center',
        },
    ],
    BS_PLAN_TASK: [{
            title: "任务编号",
            dataIndex: "pid",
            width: '8%',
            align: 'center',
        },
        {
            title: "任务标题",
            dataIndex: "task_title",
            width: '25%',
            align: 'center',
        },
        {
            title: "开始时间",
            dataIndex: "start_time",
            width: '10%',
            align: 'center',
        },
        {
            title: "结束时间",
            dataIndex: "end_time",
            width: '10%',
            align: 'center',
        },
        {
            title: "实际开始",
            dataIndex: "real_start_time",
            width: '10%',
            align: 'center',
        },
        {
            title: "实际结束",
            dataIndex: "real_end_time",
            width: '10%',
            align: 'center',
        },
        {
            title: "分配对象",
            dataIndex: "create_by",
            width: '10%',
            align: 'center',
        },
        {
            title: "执行人员",
            dataIndex: "task_exector",
            width: '10%',
            align: 'center',
        },
        {
            title: "完成状态",
            dataIndex: "status",
            width: '10%',
            align: 'center',
        },
    ],
    BS_WORK_CONTACT: [{
            title: "序号",
            dataIndex: "no",
            width: '10%',
            align: 'center',
        },
        {
            title: "联系部门",
            dataIndex: "depart_name",
            width: '10%',
            align: 'center',
        },
        {
            title: "部门路径",
            dataIndex: "depart_path",
            width: '10%',
            align: 'center',
        },
        {
            title: "对接人员",
            dataIndex: "employee",
            width: '10%',
            align: 'center',
        },
        {
            title: "详情描述",
            dataIndex: "content",
            width: '60%',
            align: 'left',
        },
    ],
};

var mainTableConfig = {
    BS_LEAVE: [],
    BS_EGRESS: [],
    BS_OVERTIME: [],
    BS_ATTENDANCE: [],
    BS_WORK_CONTACT: [],
    BS_RECORD_BORROW: [],
    BS_SEAL_NORMAL: [],
    BS_SEAL_CONTRACT: [],
    BS_SEAL_DECLARE: [],
    BS_TRAVEL: [],
    BS_REIM: [],
    BS_PURCHASE: [],
    BS_MIREANNA: [],
    BS_PLAN_TASK: [],
    BS_DOCUMENT: []
};

var mainSubTableNameConfig = {
    'BS_ATTENDANCE': 'BS_ATTENDANCE_DETAILS',
    'BS_REIM': 'BS_REIM_ITEM',
    'BS_PURCHASE': 'BS_PURCHASE_ITEM',
    'BS_MIREANNA': 'BS_MIREANNA_ITEM',
    'BS_PLAN_TASK': 'BS_PLAN_TASK_ITEM',
    'BS_DOCUMENT': 'BS_DOCUMENT_ITEM',
    'BS_WORK_CONTACT': 'BS_WORK_CONTACT_ITEM'
};

var requestAPIConfig = {
    domain: window._CONFIG['domain'],
    restapi: window._CONFIG['restAPI'],
    token: `${window._CONFIG['domain']}/jeecg-boot/sys/common/token`,
    user: `${window._CONFIG['domain']}/jeecg-boot/api/user`,
    role: `${window._CONFIG['domain']}/jeecg-boot/api/role`,
    service: `${window._CONFIG['domain']}/jeecg-boot/api/service`,
    permission: `${window._CONFIG['domain']}/jeecg-boot/api/permission`,
    permissionNoPager: `${window._CONFIG['domain']}/jeecg-boot/api/permission/no-pager`,
    PROCESS_NODE_DICT_ID: '095a5c3fed5b29706cdfc6d9cb32cd4c', //流程节点，对应的字典的ID,根据这个查询流程节点的名称
}

window.webchatKey = webchatKey;
window.companyPanKey = companyPanKey;
window.wallKey = wallKey;
window.indexKey = indexKey;
window.workplaceKey = workplaceKey;
window.centerKey = centerKey;
window.blogKey = blogKey;
window.taskKey = taskKey;
window.documentKey = documentKey;
window.musicKey = musicKey;
window.docKey = docKey;
window.yunpanKey = yunpanKey;
window.sourceKey = sourceKey;
window.titleKV = titleKV;
window.tableConfig = tableConfig;
window.leaveTypeConfig = leaveTypeConfig;
window.bpmStatusConfig = bpmStatus;
window.formTypeNameConfig = formTypeNameConfig;
window.formMainTypeConfig = formMainTypeConfig;
window.formTypeValueConfig = formTypeValueConfig;
window.startTimeConfig = startTimeConfig;
window.endTimeConfig = endTimeConfig;
window.fileNameConfig = fileNameConfig;
window.subTableFieldConfig = subTableFieldConfig;
window.mainTableConfig = mainTableConfig;
window.mainSubTableNameConfig = mainSubTableNameConfig;
window.requestAPIConfig = requestAPIConfig;