/**
 * 渲染层，绑定各种事件或渲染页面
 */
define(function(require, exports, module) {

    var render = (function() {

        var _render = {};

        /**
         * 初始化数据
         */
        _render.init = function() {
            // 初始化变量
            this.controller = require('../../../controller/test/module1/test');
            //this.testTemplate = require('../../../templates_c/test/module1/test');

            // 绑定事件入口
            bindEvent();
        };

        // 显示搜索结果
        _render.showResult = function(result) {
            alert(result.join('; '));
        };

        // 显示出错信息
        _render.showError = function() {
            alert('Error!');
        };

        // 绑定页面上各个元素的事件
        var bindEvent = function() {

            // 失去焦点时trim value
            $('#input1').on('blur', function() {

                var $this = $(this);
                require.async('util', function() {
                    $this.val(HB.util.trim($this.val()));
                });
            });

            // 点提交时，搜索匹配内容
            $('#button1').on('click', function() {
                _render.controller.onClick($('#input1').val());
            });
        };

        return _render;
    })();

    return render;
});