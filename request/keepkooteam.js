debugger;

/**
 * @function 获取URL请求参数
 */
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return (r[2]);
    return null;
}

/**
 * @function 设置cookie信息
 */
function setCookie(name, value, days = 1) {
    var exp = new Date();
    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

/**
 * @function 读取cookie信息
 */
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    } else {
        return null;
    }
}

/**
 * @function 删除cookies
 */
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) {
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }
}

/**
 * @function 执行初始化操作
 */
function init() {

    //第一步，获取节点
    var node = JSON.stringify({
        "nick": getUrlParam('username'),
        "uid": getUrlParam('uid'),
        "tag": getUrlParam('tag'),
        "ukey": getUrlParam('ukey')
    });

    try {
        //打印日志
        console.log('node : ' + node);

        //第二步，写入节点到cookie中
        setCookie('zenUser', node, 0.5);

        debugger;

        console.log('设置缓存');

        //第三步，跳转页面到主页面
        window.location.href = window.location.protocol + '://' + window.location.host + ':' + window.location.port + '/todo/home.xhtm';
    } catch (error) {
        console.log(error);
    }

}

init();