var seting = {
    apiUrl: "", // api地址
    ratio: 0.618, // 图片宽高比
    types: '360new', // 加载壁纸的种类
    downApi: 'http://image.baidu.com/search/down?tn=download&word=download&ie=utf8&fr=detail&url=' // 用于下载图片的api地址
};

var jigsaw = {
    count: 0, // 已加载的总数
    halfHtml: '', // 最后一个加载的html
    loadBig: false, // 是否已加载最大的那个
    ajaxing: false //是否正在ajax加载
};

// 大小改变
window.onresize = function() {
    resizeHeight();
};

// 初始化
window.onload = function() {
    ajax360Tags();
    loadData(seting.types, true); // 初始加载壁纸
    resizeHeight();
};

$(function() {

    // 监听滚动消息
    $(window).scroll(function() {
        if ($(this).scrollTop() + $(window).height() + 20 >= $(document).height() && $(this).scrollTop() > 20) {
            loadData(seting.types, false);
        }
        if (seting.types != 'bing' && seting.types != 'ciba') {
            if ($(window).scrollTop() >= 300) {
                $('#toolBall').fadeIn(400);
            } else {
                $('#toolBall').fadeOut(200);
            }
        }
    });

    $("#toolBall").click(function() {
        if (seting.types == 'bing' || seting.types == 'ciba') {
            return true;
        }
        $('body').animate({ scrollTop: 0 }, 300, 'swing');
        return false;
    });

    // 点击关闭弹出层
    $("body").on("click", "#full-img", function() {
        $("#full-img").remove();
    });

    // 点击小图显示大图
    $("#walBox").on("click", "img", function() {
        showImg($(this).data('realurl'));
    });
});


// 加载壁纸容器中的壁纸
function loadData(types, newload) {
    if (types != seting.types || newload === true) {
        seting.types = types;
        jigsaw = {
            count: 0, // 已加载的总数
            halfHtml: '', // 最后一个加载的html
            loadBig: false, // 是否已加载最大的那个
            ajaxing: false //是否正在ajax加载
        };
        $("#walBox").html('');
        $(document).unbind('mousewheel DOMMouseScroll MozMousePixelScroll'); // 解除全屏滚动的绑定
        $(".onepage-pagination").remove();
        $("body").removeClass();
        $(".jigsaw").removeAttr("style");
        $("#toolBall").attr('href', 'javascript:void(0);');
        $("#toolBall").attr('class', 'uptoTop');
        $("#toolBall").attr('title', '返回顶部');
        $("#toolBall").hide();
    }

    switch (seting.types) {
        case 'bing': //加载必应壁纸
            ajaxBingWal(-1, 8);
            ajaxBingWal(7, 8);
            $("#toolBall").show();
            $("#toolBall").attr('class', 'downBing');
            $("#toolBall").attr('title', '下载这张图片');
            break;

        case 'ciba': // 加载金山词霸每日一句壁纸
            if (newload === false) return;
            ajaxCiba(1);
            $("#toolBall").show();
            $("#toolBall").attr('class', 'downBing');
            $("#toolBall").attr('title', '下载这张图片');
            break;

        default: // 加载来自360的壁纸
            ajax360Wal(seting.types, jigsaw.count, 30);
    }
}

resizeHeight();

// 重新调整高度
function resizeHeight() {
    switch (seting.types) {
        default: var newHeight = $("#walBox").width() * (seting.ratio / 2); // parseInt($(".jigsaw .half").css('width'))
        $(".jigsaw .item").css('height', newHeight);
        $(".jigsaw .Hhalf").css('height', newHeight / 2);
    }
    return true;
}

// 显示一张拼图壁纸
function addJigsaw(img, alt) {
    var newHtml; // 新增的内容
    var imgWidth, imgHeight;
    jigsaw.count++; // 已加载壁纸数自加

    if (jigsaw.halfHtml !== '') //  1/4 的壁纸，已加载完上面一半，接着加载下面那半
    {
        imgWidth = parseInt(screen.width / 4);
        imgHeight = parseInt(imgWidth * seting.ratio);

        newHtml = '    <div class="Hhalf oneImg" onmouseover="hoverJigsaw(this)">' +
            '        <img data-original="' + decode360Url(img, imgWidth, imgHeight, 0) + '" alt="' + alt + '" title="关键字：' + alt + '" data-realurl="' + img + '">' +
            '    </div>' +
            '</div>';
        contAdd(jigsaw.halfHtml + newHtml); //往容器中加入内容
        jigsaw.halfHtml = ''; // 另外半边加载完成
        return true; // 函数功能已完成
    }

    if (((jigsaw.count - 1) % 5) === 0) { jigsaw.loadBig = false; } // 新的一行，状态重置

    if ((jigsaw.loadBig === false) && ((Math.floor(Math.random() * 3) === 0) || ((jigsaw.count % 5) === 0))) // 随机加载大张壁纸
    {
        imgWidth = parseInt(screen.width / 2);
        imgHeight = parseInt(imgWidth * seting.ratio);

        newHtml = '<div class="item half oneImg" onmouseover="hoverJigsaw(this)">' +
            '    <img data-original="' + decode360Url(img, imgWidth, imgHeight, 0) + '" alt="' + alt + '" title="关键字：' + alt + '" data-realurl="' + img + '">' +
            '</div>';
        contAdd(newHtml); //往容器中加入内容
        jigsaw.loadBig = true; // 大张壁纸已被加载
        return true; // 函数功能已完成
    }

    // 加载半张的壁纸
    imgWidth = parseInt(screen.width / 4);
    imgHeight = parseInt(imgWidth * seting.ratio);

    jigsaw.halfHtml = '<div class="item quater">' +
        '    <div class="Hhalf oneImg" onmouseover="hoverJigsaw(this)">' +
        '        <img data-original="' + decode360Url(img, imgWidth, imgHeight, 0) + '" alt="' + alt + '" title="关键字：' + alt + '" data-realurl="' + img + '">' +
        '    </div>';
    return true;
}

// 往壁纸容器中加入内容
function contAdd(html) {
    var myBox = $("#walBox"); // 装壁纸的容器
    var $newHtml = $(html);
    myBox.append($newHtml); // 加载到容器中
    $("img", $newHtml).lazyload({
        effect: 'fadeIn',
        threshold: 200 // 提前开始加载
    });
}

//获取真实URL
function queryRealURL(cid = '', start = 0, count = 10) {
    switch (cid) {
        case '360new': // 360壁纸 新图片
            return `https://gogs.shengtai.club/image?cid=360new&start=${start}&count=${count}`;
        case '360tags':
            return `https://gogs.shengtai.club/category`;
        case 'bing':
            return `https://gogs.shengtai.club/bing?start=${start}&count=${count}`;
        default:
            return `https://gogs.shengtai.club/image?cid=${cid}&start=${start}&count=${count}`;
    }
}

// ajax加载必应壁纸
function ajaxBingWal(start, count) {
    $.ajax({
        type: "GET",
        url: queryRealURL('bing', start, count),
        dataType: "json",
        success: function(jsonData) {
            var newHtml = '<link rel="stylesheet" href="css/onepage-scroll.css">',
                downUrl = '';
            $("#walBox").append(newHtml); // 全屏滚动插件css

            for (var i = 0; i < jsonData.images.length; i++) {
                if (jsonData.images[i].wp === true) { // BING官方不让下载的图片处理
                    downUrl = 'http://cn.bing.com/hpwp/' + jsonData.images[i].hsh;
                } else {
                    downUrl = 'http://cn.bing.com' + jsonData.images[i].url;
                }
                newHtml += '<section data-url="' + downUrl + '" data-img="http://cn.bing.com' + jsonData.images[i].url + '"><p class="note">' + jsonData.images[i].copyright + '</p></section>';
            }
            $("#walBox").append(newHtml);

            $('#walBox').onepage_scroll({
                loop: false, // 禁止循环滚动
                beforeMove: function(index) {
                    $("#toolBall").attr('href', $(".section").eq(index - 1).attr('data-url'));
                    $(".section").eq(index - 1).attr('style', 'background-image: url(' + $(".section").eq(index - 1).attr('data-img') + ')');
                },
                afterMove: function(index) {
                    $(".section").eq(index).attr('style', 'background-image: url(' + $(".section").eq(index).attr('data-img') + ')');
                    $(".section").eq(index - 2).attr('style', 'background-image: url(' + $(".section").eq(index - 2).attr('data-img') + ')');
                    // $(".section").eq(index-1).attr('style','background-image: url('+ $(".section").eq(index-1).attr('data-img') +')');
                }
            });
            $("#toolBall").attr('href', $(".section").eq(0).attr('data-url'));
            $(".section").eq(0).attr('style', 'background-image: url(' + $(".section").eq(0).attr('data-img') + ')');

        }
    });
    return true;
}

// ajax加载金山词霸每日图片
function ajaxCiba(data) {
    $.ajax({
        type: "GET",
        url: "http://open.iciba.com/dsapi/",
        dataType: "jsonp",
        success: function(jsonData) {
            var newHtml = '<style>#walBox .note{position: fixed;}body{background-image: url(' + jsonData.picture2 + ');overflow: hidden;}</style>' +
                '<p class="note" title="' + jsonData.translation + '"><span onclick="$(\'audio\')[0].play();" title="点击朗读" class="ciba-eng">' + jsonData.content + '</span><br>' + jsonData.note + //❤
                ' <span title="' + jsonData.love + '人喜欢" class="ciba-love" onclick="$(\'.love-count\').html(parseInt($(\'.love-count\').html()) + 1)"><span style="color: red;">❤</span>+<span class="love-count">' + jsonData.love + '</span></span></p>' +
                '<audio src="' + jsonData.tts + '" hidden></audio>';

            $("#walBox").append(newHtml);

            $("#toolBall").attr('href', seting.downApi + jsonData.picture2); // 下载链接

        }
    });
    return true;
}

// ajax加载360壁纸标签
function ajax360Tags() {
    var jsonData = JSON.parse(`{"errno":"0","errmsg":"\u6b63\u5e38","consume":"2","total":"18","data":[{"id":"36","name":"4K\u4e13\u533a","order_num":"110","tag":"","create_time":"2015-12-08 13:50:44"},{"id":"6","name":"\u7f8e\u5973\u6a21\u7279","order_num":"100","tag":"","create_time":"2011-10-29 17:49:27"},{"id":"30","name":"\u7231\u60c5\u7f8e\u56fe","order_num":"99","tag":"","create_time":"2012-11-23 10:49:25"},{"id":"9","name":"\u98ce\u666f\u5927\u7247","order_num":"98","tag":"","create_time":"2011-11-02 16:33:34"},{"id":"15","name":"\u5c0f\u6e05\u65b0","order_num":"85","tag":"","create_time":"2011-12-15 18:47:03"},{"id":"26","name":"\u52a8\u6f2b\u5361\u901a","order_num":"84","tag":"","create_time":"2012-07-27 17:17:42"},{"id":"11","name":"\u660e\u661f\u98ce\u5c1a","order_num":"83","tag":"","create_time":"2011-11-02 17:38:58"},{"id":"14","name":"\u840c\u5ba0\u52a8\u7269","order_num":"75","tag":"","create_time":"2011-12-15 18:23:27"},{"id":"5","name":"\u6e38\u620f\u58c1\u7eb8","order_num":"74","tag":"","create_time":"2011-10-29 17:49:12"},{"id":"12","name":"\u6c7d\u8f66\u5929\u4e0b","order_num":"72","tag":"","create_time":"2011-12-13 18:59:40"},{"id":"10","name":"\u70ab\u9177\u65f6\u5c1a","order_num":"70","tag":"","create_time":"2011-11-02 17:10:53"},{"id":"29","name":"\u6708\u5386\u58c1\u7eb8","order_num":"69","tag":"","create_time":"2012-11-23 09:19:54"},{"id":"7","name":"\u5f71\u89c6\u5267\u7167","order_num":"68","tag":"","create_time":"2011-11-02 15:22:39"},{"id":"13","name":"\u8282\u65e5\u7f8e\u56fe","order_num":"67","tag":"\u8282\u65e5 \u7aef\u5348 \u4e2d\u79cb \u5143\u65e6 \u5723\u8bde \u6e05\u660e \u60c5\u4eba \u6625\u8282 \u65b0\u5e74 2012","create_time":"2011-12-14 18:47:32"},{"id":"22","name":"\u519b\u4e8b\u5929\u5730","order_num":"14","tag":"","create_time":"2012-05-29 15:10:04"},{"id":"16","name":"\u52b2\u7206\u4f53\u80b2","order_num":"12","tag":"","create_time":"2011-12-30 11:37:49"},{"id":"18","name":"BABY\u79c0","order_num":"10","tag":"","create_time":"2012-03-28 23:52:39"},{"id":"35","name":"\u6587\u5b57\u63a7","order_num":"9","tag":"","create_time":"2014-09-25 18:35:57"}]}`);
    var newHtml = '';
    for (var i = 0; i < jsonData.data.length; i++) {
        newHtml += '<li data-id=' + jsonData.data[i].id + ' onclick="loadData(' + jsonData.data[i].id + ', true);changeTitle(this)">' + jsonData.data[i].name + '</li>';
    }
    $("#tags").append(newHtml);
    return true;
}

// ajax加载来自360的壁纸
function ajax360Wal(cid, start, count) {
    if (jigsaw.ajaxing === true) return false;
    $("#loadmore").html('努力加载中……');
    $("#loadmore").show();
    jigsaw.ajaxing = true;
    if (cid = '360new') {

    } else if ()
        $.ajax({
            type: "GET",
            url: queryRealURL(cid, start, count),
            dataType: "json",
            success: function(jsonData) {
                for (var i = 0; i < jsonData.data.length; i++) {
                    addJigsaw(jsonData.data[i].url, decode360Tag(jsonData.data[i].tag));
                }
                resizeHeight();
                jigsaw.ajaxing = false;
                if (jsonData.data.length === 0) {
                    $("#loadmore").html('所有的壁纸都已经加载完啦！');
                } else {
                    $("#loadmore").hide();
                }
            }
        });
    return true;
}

// 解码360api获取的tag标签
function decode360Tag(oldTag) {
    return oldTag.match(/_category_[^_]+_/g).join(" ").replace(/_category_([^_]+)_/g, "$1");
}

// 解码360图片的链接，获得指定尺寸图片
function decode360Url(oldUrl, width, height, quality) {
    return oldUrl.replace("r\/__85", "m\/" + parseInt(width) + "_" + parseInt(height) + "_" + quality);
}

// 拼图图块鼠标移动显示分辨率下载
function hoverJigsaw(obj) {
    if ($(obj).find('.down').length > 0) return true;

    var realUrl = $(obj).find('img').attr("data-realurl");
    var downBox = '';
    downBox = '<ul class="down" title="下载壁纸">' +
        '<li><a href="' + seting.downApi + decode360Url(realUrl, 2560, 1600, 100) + '" target="_blank">2560x1600</a></li>' +
        '<li><a href="' + seting.downApi + decode360Url(realUrl, 1440, 900, 100) + '" target="_blank">1440x900</a></li>' +
        '<li><a href="' + seting.downApi + decode360Url(realUrl, 1024, 768, 100) + '" target="_blank">1024x768</a></li>' +
        '<li><a href="' + seting.downApi + decode360Url(realUrl, 800, 600, 100) + '" target="_blank">800x600</a></li>' +
        '<li><a href="' + seting.downApi + decode360Url(realUrl, 0, 0, 100) + '" target="_blank" title="下载原始尺寸图片">原始尺寸</a></li></ul>'
    $(obj).append(downBox);
}

// 同步改变浏览器标题
function changeTitle(obj) {
    $('title').html($(obj).html() + ' - 在线壁纸');
}

var imgDom;

// 全屏展示图片
// 参数：图片链接
function showImg(img) {
    imgDom = $('<img>').attr('id', 'full-img').attr('src', img).appendTo('body');
}

// 版权信息
console.info('作者：mengkun(http://mkblog.cn)\n壁纸来源于：360壁纸库、必应首页壁纸以及金山词霸开放平台\nGithub：https://github.com/mengkunsoft/wallpaper');