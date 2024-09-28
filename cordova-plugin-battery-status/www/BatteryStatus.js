var exec = require('cordova/exec');

exports.getBatteryLevel = function(success, error) {
    exec(success, error, "BatteryStatus", "getBatteryLevel", []);
};
