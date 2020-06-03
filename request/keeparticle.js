const articleLoadData = async(that, storage, manageAPI) => {
    //将that挂载到blogArticle上面
    if (window.blogArticle == null || typeof window.blogArticle == 'undefined') {
        window.blogArticle = that;
    }
    //获取当前key信息
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

const articleLoadMore = async(that, storage, manageAPI) => {
    //将that挂载到blogArticle上面
    if (window.blogArticle == null || typeof window.blogArticle == 'undefined') {
        window.blogArticle = that;
    }
    //获取当前key信息
    var key = storage.getStore(`system_title_key`);
    //显示加载图标
    that.loadingMore = true;
    //获取返回数据结果
    var blist = await manageAPI.queryBlogInfo(that.page, that.size, key);
    //数据合并
    that.data = that.data.concat(blist);
    //新增查询页面
    that.page++;
    //延时加载数据
    setTimeout(async() => {
        //关闭加载图标
        that.loadingMore = false;
    }, 1000);
}

window.articleLoadMore = articleLoadMore;