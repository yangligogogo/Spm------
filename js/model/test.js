/**
 * 数据层，负责数据业务
 */
define(function(require, exports, module) {

    var model = (function() {

        var _model = {};
        var _cache = ['javascript', 'java', 'c', 'c++', 'python', 'php', 'asp', 'jsp'];

        _model.init = function() {};

        // 从cache中搜索给定词
        // 这里是从变量里去，也可以ajax去后端取
        _model.search = function(query) {

            return $.map(_cache, function(val) {
                if (val.indexOf(query) !== -1) {
                    return val;
                }
            });
        };

        return _model;
    })();

    return model;
});