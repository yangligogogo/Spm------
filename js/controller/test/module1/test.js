/**
 * 控制层，初始化页面和响应回调的入口
 */
define(function(require, exports, module) {

    var controller = (function() {

        var _controller = {};

        /**
         * 初始化数据
         */
        _controller.init = function() {

            // 初始化Model层和render层
            this.testModel = require('../../../model/test');
            this.render = require('../../../render/test/module1/test');
            // 调用render初始化函数
            this.render.init();
        };

        // render层事件触发后的回调入口
        _controller.onClick = function(query) {

            if (query) {
                // 搜索(可能调用ajax远程数据，也可能是js缓存的数组)
                var result = _controller.testModel.search(query);
                if ($.isArray(result) && result.length > 0) {
                    _controller.render.showResult(result);
                } else {
                    _controller.render.showError();
                }
            }
        };

        return _controller;
    })();

    return controller;
});