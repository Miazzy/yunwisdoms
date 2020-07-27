self.addEventListener('install', function(event) {
    console.log(event);
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                '/index.html',
                '/\.(js|css|html|png|jpg|gif|jpeg|woff|ttf|svg|eot)$/',
                'https://www.shengtai.club/',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/index.css',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/antd.min.css',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/fingerprint2.min.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/request/keepssl.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/babel-polyfill/polyfill.min.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/vue/vue.min.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/vue-router/vue-router.min.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/vuex.min.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/axios.min.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/moment.min.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/underscore-min.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/nprogress.min.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/config/route.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/antd.min.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/element-ui.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/request/keepconfig.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/config/config.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/request/request.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/request/requestflow.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/request/analysis.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/request/layout.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/request/keepalive.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/request/topics.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/request/keeparticle.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/dayjs/dayjs.min.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/vue-apexcharts.min.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/superagent.min.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/spark-md5.min.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/md5.min.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/clipboard.min.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/vue-clipboard.min.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/wangEditor.min.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/tinymce.min.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/vue-i18n.min.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/crypto-js.min.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/jquery.min.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/poetaddrarray.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/maxim.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/qs.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/OnlineForm.umd.min.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/vue-qrcode.min.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/vue-photo-preview.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/viser-vue.min.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/echarts.min.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/mavon-editor.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/codemirror.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/iview.min.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/localforage.min.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/vue-cropper.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/lodash.pick.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/FileSaver.min.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/color-thief.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/vue-aplayer.js',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/nprogress.min.css',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/mavon-editor.css',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/vue-photo-preview.skin.css',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/view-design.iview.css',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/codemirror.css',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/codemirror.panda-syntax.css',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/common/codemirror.show-hint.css',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/wang-editor/wangEditor.min.css',
                'https://cdn.jsdelivr.net/gh/Miazzy/yunwisdoms@v8.0.0/cdn/theme-chalk/index.css',
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request).then(function(response) {
        if (response !== undefined) {
            return response;
        } else {
            return fetch(event.request).then(function(response) {
                let responseClone = response.clone();
                if (/\.(png|jpg|gif|html|js|css|ico|svg|jpeg|doc|docx|ppt|pptx|xls|xlsx|pdf|eot|ttf|woff|woff2|json|txt)$/.test(event.request.url.toLocaleLowerCase())) {
                    caches.open('v1').then(function(cache) {
                        cache.put(event.request, responseClone);
                    });
                }
                return response;
            }).catch(function() {
                return false;
            });
        }
    }));
});