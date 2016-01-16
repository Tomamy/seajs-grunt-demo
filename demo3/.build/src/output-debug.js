define("./src/output-debug", [ "jquery-debug" ], function(require, exports, module) {
    var $ = require("jquery-debug");
    exports.print = function(mesg) {
        $("#container").html(mesg);
    };
});
