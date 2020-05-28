const initLayout = (that) => {

    //是否存在路径标识,检查pageList中是否含有window.indexKey
    let flag = window.__.find(that.pageList, item => {
        return item.path == window.indexKey;
    });
    if (flag == null || typeof flag == "undefined") {
        that.pageList.push({
            name: "dashboard-analysis",
            path: window.indexKey,
            fullPath: window.indexKey,
            meta: {
                icon: "dashboard",
                title: "首页"
            }
        });
        that.linkList.push(window.indexKey);
    }
    //是否存在路径标识,检查pageList中是否含有window.centerKey
    flag = window.__.find(that.pageList, item => {
        return item.path == window.centerKey;
    });
    if (flag == null || typeof flag == "undefined") {
        that.pageList.push({
            name: "account-center",
            path: window.centerKey,
            fullPath: window.centerKey,
            meta: {
                icon: "account",
                title: "个人中心"
            }
        });
        that.linkList.push(window.centerKey);
    }
    //是否存在路径标识,检查pageList中是否含有window.workplaceKey
    flag = window.__.find(that.pageList, item => {
        return item.path == window.workplaceKey;
    });
    if (flag == null || typeof flag == "undefined") {
        that.pageList.push({
            name: "dashboard-workplace",
            path: window.workplaceKey,
            fullPath: window.workplaceKey,
            meta: {
                icon: "dashboard",
                title: "应用中心"
            }
        });
        that.linkList.push(window.workplaceKey);
    }
    //是否存在路径标识,检查pageList中是否含有window.blogKey
    flag = window.__.find(that.pageList, item => {
        return item.path == window.blogKey;
    });
    if (flag == null || typeof flag == "undefined") {
        that.pageList.push({
            name: "blog-center",
            path: window.blogKey,
            fullPath: window.blogKey,
            meta: {
                icon: "blog",
                title: "博客中心"
            }
        });
        that.linkList.push(window.blogKey);
    }
    //是否存在路径标识,检查pageList中是否含有window.taskKey
    flag = window.__.find(that.pageList, item => {
        return item.path == window.taskKey;
    });
    if (flag == null || typeof flag == "undefined") {
        that.pageList.push({
            name: "task-center",
            path: window.taskKey,
            fullPath: window.taskKey,
            meta: {
                icon: "task",
                title: "任务中心"
            }
        });
        that.linkList.push(window.taskKey);
    }
    //是否存在路径标识,检查pageList中是否含有window.documentKey
    flag = window.__.find(that.pageList, item => {
        return item.path == window.documentKey;
    });
    if (flag == null || typeof flag == "undefined") {
        that.pageList.push({
            name: "document-center",
            path: window.documentKey,
            fullPath: window.documentKey,
            meta: {
                icon: "document",
                title: "文档中心"
            }
        });
        that.linkList.push(window.documentKey);
    }
    //是否存在路径标识,检查pageList中是否含有window.docKey
    flag = window.__.find(that.pageList, item => {
        return item.path == window.docKey;
    });
    if (flag == null || typeof flag == "undefined") {
        that.pageList.push({
            name: "doc-center",
            path: window.docKey,
            fullPath: window.docKey,
            meta: {
                icon: "document",
                title: "资料中心"
            }
        });
        that.linkList.push(window.docKey);
    }
    //是否存在路径标识,检查pageList中是否含有window.musicKey
    flag = window.__.find(that.pageList, item => {
        return item.path == window.musicKey;
    });
    if (flag == null || typeof flag == "undefined") {
        that.pageList.push({
            name: "music-center",
            path: window.musicKey,
            fullPath: window.musicKey,
            meta: {
                icon: "music",
                title: "音乐中心"
            }
        });
        that.linkList.push(window.musicKey);
    }
    //是否存在路径标识,检查pageList中是否含有window.companyPanKey
    flag = window.__.find(that.pageList, item => {
        return item.path == window.companyPanKey;
    });
    if (flag == null || typeof flag == "undefined") {
        that.pageList.push({
            name: "company-disk-center",
            path: window.companyPanKey,
            fullPath: window.companyPanKey,
            meta: {
                icon: "disk",
                title: "公司云盘"
            }
        });
        that.linkList.push(window.companyPanKey);
    }
    //是否存在路径标识,检查pageList中是否含有window.yunpanKey
    flag = window.__.find(that.pageList, item => {
        return item.path == window.yunpanKey;
    });
    if (flag == null || typeof flag == "undefined") {
        that.pageList.push({
            name: "person-disk-center",
            path: window.yunpanKey,
            fullPath: window.yunpanKey,
            meta: {
                icon: "disk",
                title: "个人云盘"
            }
        });
        that.linkList.push(window.yunpanKey);
    }
    //是否存在路径标识,检查pageList中是否含有window.sourceKey
    flag = window.__.find(that.pageList, item => {
        return item.path == window.sourceKey;
    });
    if (flag == null || typeof flag == "undefined") {
        that.pageList.push({
            name: "disk-center",
            path: window.sourceKey,
            fullPath: window.sourceKey,
            meta: {
                icon: "disk",
                title: "资料仓库"
            }
        });
        that.linkList.push(window.sourceKey);
    }
    //是否存在路径标识,检查pageList中是否含有window.wallKey
    flag = window.__.find(that.pageList, item => {
        return item.path == window.wallKey;
    });
    if (flag == null || typeof flag == "undefined") {
        that.pageList.push({
            name: "wall-center",
            path: window.wallKey,
            fullPath: window.wallKey,
            meta: {
                icon: "wall",
                title: "壁纸中心"
            }
        });
        that.linkList.push(window.wallKey);
    }
    //是否存在路径标识,检查pageList中是否含有window.webchatKey
    flag = window.__.find(that.pageList, item => {
        return item.path == window.webchatKey;
    });
    if (flag == null || typeof flag == "undefined") {
        that.pageList.push({
            name: "webchat-center",
            path: window.webchatKey,
            fullPath: window.webchatKey,
            meta: {
                icon: "webchat",
                title: "云聊信息"
            }
        });
        that.linkList.push(window.webchatKey);
    }
    if (
        that.$route.fullPath != window.indexKey &&
        that.$route.fullPath != window.workplaceKey &&
        that.$route.fullPath != window.centerKey &&
        that.$route.fullPath != window.blogKey &&
        that.$route.fullPath != window.taskKey &&
        that.$route.fullPath != window.documentKey &&
        that.$route.fullPath != window.docKey &&
        that.$route.fullPath != window.companyPanKey &&
        that.$route.fullPath != window.yunpanKey &&
        that.$route.fullPath != window.sourceKey &&
        that.$route.fullPath != window.wallKey &&
        that.$route.fullPath != window.webchatKey &&
        that.$route.fullPath != window.musicKey
    ) {
        that.pageList.push(that.$route);
        that.linkList.push(that.$route.fullPath);
    }

    that.activePage = that.$route.fullPath;

    //把remove函数，设置到$root上
    that.$root.$tabs = that;
    that.$root.$tabs.closeTab = that.$options.methods.closeTabPage;

    //初始化样式
    initCss();
}

window.initLayout = initLayout;

const initCss = () => {
    setTimeout(() => {
        //设置样式
        try {
            $('.ant-tabs.ant-tabs-card .ant-tabs-tab').css('cssText', 'padding: 0px 14px !important; margin-right: 7px !important; ');
        } catch (error) {
            console.log(error);
        }
    }, 150);
}

const removeLayout = (key, that) => {
    if (that.checkClosePageValid(key)) {
        that.pageList = that.pageList.filter(item => item.fullPath !== key);
        let index = that.linkList.indexOf(key);
        that.linkList = that.linkList.filter(item => item !== key);
        index = index >= that.linkList.length ? that.linkList.length - 1 : index;
        that.activePage = that.linkList[index];
    }
}

window.removeLayout = removeLayout;

const onContextmenuLayout = (env, that) => {
    const pagekey = that.getPageKey(env.target);
    if (pagekey !== null) {
        env.preventDefault();
        that.menuVisible = true;
    }
}

window.onContextmenuLayout = onContextmenuLayout;

const getPageKeyLayout = (target, depth, that) => {
    depth = depth || 0;
    if (depth > 2) {
        return null;
    }
    let pageKey = target.getAttribute("pagekey");
    pageKey =
        pageKey ||
        (target.previousElementSibling ?
            target.previousElementSibling.getAttribute("pagekey") :
            null);
    return (
        pageKey ||
        (target.firstElementChild ?
            getPageKeyLayout(target.firstElementChild, ++depth, that) :
            null)
    );
}

window.getPageKeyLayout = getPageKeyLayout;

const onMenuSelectLayout = (key, target, that) => {
    let pageKey = getPageKeyLayout(target);
    switch (key) {
        case "1":
            closeLeftLayout(pageKey, that);
            break;
        case "2":
            closeRightLayout(pageKey, that);
            break;
        case "3":
            closeOthersLayout(pageKey, that);
            break;
        default:
            break;
    }
}

window.onMenuSelectLayout = onMenuSelectLayout;

const closeOthersLayout = (pageKey, that) => {
    let index = that.linkList.indexOf(pageKey);
    if (pageKey == window.indexKey) {
        that.linkList = that.linkList.slice(index, index + 1);
        that.pageList = that.pageList.slice(index, index + 1);
        that.activePage = that.linkList[0];
    } else {
        let indexContent = that.pageList.slice(0, 1)[0];
        that.linkList = that.linkList.slice(index, index + 1);
        that.pageList = that.pageList.slice(index, index + 1);
        that.linkList.unshift(window.indexKey);
        that.pageList.unshift(indexContent);
        that.activePage = that.linkList[1];
    }
}

window.closeOthersLayout = closeOthersLayout;

const closeLeftLayout = (pageKey, that) => {
    if (pageKey == window.indexKey) {
        return;
    }
    let tempList = [...that.pageList];
    let indexContent = tempList.slice(0, 1)[0];
    let index = that.linkList.indexOf(pageKey);
    that.linkList = that.linkList.slice(index);
    that.pageList = that.pageList.slice(index);
    that.linkList.unshift(window.indexKey);
    that.pageList.unshift(indexContent);
    if (that.linkList.indexOf(that.activePage) < 0) {
        that.activePage = that.linkList[0];
    }
}

window.closeLeftLayout = closeLeftLayout;

const closeRightLayout = (pageKey, that) => {
    let index = that.linkList.indexOf(pageKey);
    that.linkList = that.linkList.slice(0, index + 1);
    that.pageList = that.pageList.slice(0, index + 1);
    if (that.linkList.indexOf(that.activePage < 0)) {
        that.activePage = that.linkList[that.linkList.length - 1];
    }
}

window.closeRightLayout = closeRightLayout;

const dynamicRouterShowLayout = (key, title, that) => {
    let keyIndex = that.linkList.indexOf(key);
    if (keyIndex >= 0) {
        let currRouter = that.pageList[keyIndex];
        let meta = Object.assign({}, currRouter.meta, { title: title });
        that.pageList.splice(
            keyIndex,
            1,
            Object.assign({}, currRouter, { meta: meta })
        );
    }
}

window.dynamicRouterShowLayout = dynamicRouterShowLayout;

const closeTabPageLayout = (key, that) => {
    if (that.checkClosePageValid(key)) {
        that.$root.$tabs.pageList = that.$root.$tabs.pageList.filter(
            item => item.fullPath !== key
        );
        let index = that.$root.$tabs.linkList.indexOf(key);
        that.$root.$tabs.linkList = that.$root.$tabs.linkList.filter(
            item => item !== key
        );
        index =
            index >= that.$root.$tabs.linkList.length ?
            that.$root.$tabs.linkList.length - 1 :
            index;
        that.$root.$tabs.activePage = that.$root.$tabs.linkList[index];
    }
}

window.closeTabPageLayout = closeTabPageLayout;

const checkClosePageValidLayout = (key, that) => {
    if (key == window.indexKey) {
        that.$message.warning("首页不能关闭!");
        return false;
    }
    if (key == window.workplaceKey) {
        that.$message.warning("应用中心不能关闭!");
        return false;
    }
    if (key == window.centerKey) {
        that.$message.warning("个人中心不能关闭!");
        return false;
    }
    if (key == window.blogKey) {
        that.$message.warning("博客中心不能关闭!");
        return false;
    }
    if (key == window.taskKey) {
        that.$message.warning("任务中心不能关闭!");
        return false;
    }
    if (key == window.documentKey) {
        that.$message.warning("文档中心不能关闭!");
        return false;
    }
    if (key == window.docKey) {
        that.$message.warning("文档中心不能关闭!");
        return false;
    }
    if (key == window.musicKey) {
        that.$message.warning("音乐中心不能关闭!");
        return false;
    }
    if (key == window.companyPanKey) {
        that.$message.warning("公司云盘不能关闭!");
        return false;
    }
    if (key == window.yunpanKey) {
        that.$message.warning("个人云盘不能关闭!");
        return false;
    }
    if (key == window.sourceKey) {
        that.$message.warning("资料仓库不能关闭!");
        return false;
    }
    if (key == window.wallKey) {
        that.$message.warning("壁纸中心不能关闭!");
        return false;
    }
    if (key == window.webchatKey) {
        that.$message.warning("云聊不能关闭!");
        return false;
    }
    if (that.$root.$tabs.pageList.length === 1) {
        that.$message.warning("这是最后一页，不能再关闭了啦");
        return false;
    }
    return true;
}

window.checkClosePageValidLayout = checkClosePageValidLayout;

const closeTabLayout = (key, that) => {
    let flag = checkClosePageValidLayout(key, that);
    if (flag == true) {
        that.$root.$tabs.pageList = that.$root.$tabs.pageList.filter(
            item => item.fullPath !== key
        );
        let index = that.$root.$tabs.linkList.indexOf(key);
        that.$root.$tabs.linkList = that.$root.$tabs.linkList.filter(
            item => item !== key
        );
        index =
            index >= that.$root.$tabs.linkList.length ?
            that.$root.$tabs.linkList.length - 1 :
            index;
        that.$root.$tabs.activePage = that.$root.$tabs.linkList[index];
    }
}

window.closeTabLayout = closeTabLayout;

const toggleTopMenuLayout = () => {
    try {
        $('.ant-set-system-info').css('display', 'none');
        $('.ant-header-side-opened').css('display', 'block');
    } catch (error) {
        console.log(error);
    }
}

window.toggleTopMenuLayout = toggleTopMenuLayout;

const handleLogoutLayout = (that) => {
    //确认注销登录
    that.$confirm_({
        title: "确认操作",
        content: "真的要注销登录吗 ?",
        onOk: async() => {
            that.Logout({})
                .then(() => {
                    that.$message.info("注销登陆成功！");
                    setTimeout(() => {
                        window.location.href = "/";
                    }, 300);
                })
                .catch(err => {
                    that.$message.error("注销登陆异常！");
                    console.log(err);
                });
        }
    });
}

window.handleLogoutLayout = handleLogoutLayout;