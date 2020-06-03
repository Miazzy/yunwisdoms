const articleLoadData = async(that, storage, manageAPI) => {
    var key = storage.getStore(`system_title_key`);
    //博文数据
    var blist = await manageAPI.queryBlogInfo(that.page, that.size, key);
    //显示加载图标
    //that.loading = true;
    //添加最新数据
    that.data = that.data.concat(blist);
    //关闭加载图标
    that.loading = false;
    //新增查询页面
    that.page++;
    //返回结果
    return "";
}

window.articleLoadData = articleLoadData;