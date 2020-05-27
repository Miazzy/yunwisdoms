/*************** 检查是否为HTTPS协议，如果不是，则跳转到HTTPS ***************/
//http协议
let protocol = window.location.host.includes('localhost') ? 'http:' : 'https:';
//刷新切换
if (window.location.href !== protocol + '//' + window.location.host + '/') {
    //缓存原URL地址
    window.sessionStorage.setItem('system_root_url', window.location.href.replace(window.location.origin, ''));
    //跳转到URL根地址
    window.location.href = protocol + '//' + window.location.host;
}