/**
 * @file 页面入口模块
 * @author lenovo
 */

 // var idx = 0;
 // Object.defineProperty(__webpack_require__, "p", {
 //   get: function() {
 //     idx = (idx + 1) % 4;
 //     return "cdn" + idx + ".server.com/";
 //   }
 // });

 // var idx = 0;
 // __webpack_publick_path__ = function() {
 //     idx = (idx + 1) % 4;
 //     return "cdn" + idx + ".server.com/";
 // }

 // window.__webpack_public_path__ = 'http://static.58cdn.com.cn/webpack-test/';

// require css
require('../../scss/reset.scss');
require('../../scss/common_header.scss');
require('../../scss/common_footer.scss');
require('../../scss/index.scss');
require('../../css/foo.css');
// 对图片进行 sprite 后产出的样式, 其引用路径需要结合实际产出路径
// require('../../../dev/img/sprite/sprite.css');
require('../../../publish/img/sprite/sprite.css');

// require html

define(['../mod/foo/foo','../mod/bar/bar'],function (foo,bar) {
    // TODO

});
