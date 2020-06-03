const queryBlogInfo = async(
    page = 0,
    size = 50,
    key
) => {
    debugger;
    var whereSQL = key ? `_where=(page_column,like,~${key}~)&` : '';
    //查询URL
    var queryURL = `${window.requestAPIConfig.restapi}/api/bs_blog?_p=${page}&_size=${size}&${whereSQL}_sort=-create_time`;
    var result = {};
    try {
        var res = await superagent.get(queryURL).set('accept', 'json');
        console.log(res);
        result = res.body;

        //遍历并格式化日期
        result = window.__.filter(result, function(item) {
            //格式化日期
            var ctime = window.tools.formatDate(item['create_time'], 'yyyy-MM-dd');
            var time = window.tools.formatDate(item['create_time'], 'yyyyMMddhhmmss');
            item['createtime'] = window.tools.formatDate(
                item['create_time'],
                'yyyy-MM-dd hh:mm:ss'
            );
            item['create_time'] = ctime;
            item['timestamp'] = time;
            item['description'] = window.tools.abbreviation(
                window.tools.delHtmlTag(item['content']),
                300
            );
            item['title'] = window.tools.abbreviation(
                window.tools.delHtmlTag(item['blog_title']),
                100
            );

            //返回结果
            return true;
        });

        //根据ID编号去掉重复的数据
        result = window.__.uniq(result, false, 'id');

        return result;
    } catch (err) {
        console.log(err);
    }
}

const articleLoadData = async(that, storage, manageAPI) => {
    //将that挂载到blogArticle上面
    if (window.blogArticle == null || typeof window.blogArticle == 'undefined') {
        window.blogArticle = that;
    }
    //获取当前key信息
    var key = storage.getStore(`system_title_key`);
    //博文数据
    var blist = await queryBlogInfo(that.page, that.size, key);
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
    var blist = await queryBlogInfo(that.page, that.size, key);
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