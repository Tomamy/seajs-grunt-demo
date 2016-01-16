define("./src/output", [ "jquery" ], function(require, exports, module) {
    var $ = require("jquery");
    exports.print = function(mesg) {
        $("#container").html(mesg);
    };
});
