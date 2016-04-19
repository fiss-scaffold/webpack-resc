/**
 * @file 页面入口模块
 * @author lenovo
 */

// require css
require('../../scss/reset.scss');
require('../../scss/common_header.scss');
require('../../scss/common_footer.scss');
require('../../scss/index.scss');
require('../../css/foo.css');
// 对图片进行 sprite 后产出的样式, 其引用路径需要结合实际产出路径
require('../../../build/img/sprite/sprite.css');

// require html

define(['../mod/foo/foo','../mod/bar/bar'],function (foo,bar) {
    // TODO

});
