var HB = HB || {};

/**
 * test
 */
define(function(require, exports, module) {


    HB.core = (function(HB) {

        // 申明_core类
        var _core = {};

        // 加载Controller
        _core.loadController = function(controller, callback) {

            var controllerPath = 'http://localhost/~yangli/SeaJs_MVC/js/controller/' + controller;

            require.async(controllerPath, function(c) {

                if (typeof(c) === 'undefined') {
                    throw new Error('The controller is invalid.');
                }

                if (typeof(c.init) !== 'function') {
                    throw new Error('The controller.init is invalid.');
                }

                c.init();

                if (typeof(callback) === 'function') {
                    callback();
                }

                return true;
            });
        };

        return _core;

    })(HB);

    // seajs 模块对外接口
    module.exports = HB.core;
});

