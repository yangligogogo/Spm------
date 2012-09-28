var HB = HB || {};

/**
 * 工具
 */
define(function(require, exports, module) {

    HB.util = (function() {

        var _u = {};

        _u.trim = function(string) {
            return $.trim(string);
        };

        return _u;
    })();

});

