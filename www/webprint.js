/**
 * cordova Web Intent plugin
 * Copyright (c) Boris Smus 2010
 *
 */
 (function(cordova){
    var WebPrint = function() {

    }; 
    WebPrint.prototype.ACTION_SEND = "android.intent.action.SEND";
    WebPrint.prototype.ACTION_VIEW= "android.intent.action.VIEW";
    WebPrint.prototype.EXTRA_TEXT = "android.intent.extra.TEXT";
    WebPrint.prototype.EXTRA_SUBJECT = "android.intent.extra.SUBJECT";
    WebPrint.prototype.EXTRA_STREAM = "android.intent.extra.STREAM";
    WebPrint.prototype.EXTRA_EMAIL = "android.intent.extra.EMAIL";
    WebPrint.prototype.ACTION_CALL = "android.intent.action.CALL";
    WebPrint.prototype.ACTION_SENDTO = "android.intent.action.SENDTO";

    WebPrint.prototype.startConlose = function (success, fail) {
        return cordova.exec(function (args) {
            success(args);
        }, function (args) {
            fail(args);
        }, 'WebPrint', 'startConlose', []);
    };


    WebPrint.prototype.startActivity = function (params, success, fail) {
        return cordova.exec(function(args) {
            success(args);
        }, function(args) {
            fail(args);
        }, 'WebPrint', 'startActivity', [params]);
    };

    WebPrint.prototype.hasExtra = function(params, success, fail) {
        return cordova.exec(function(args) {
            success(args);
        }, function(args) {
            fail(args);
        }, 'WebPrint', 'hasExtra', [params]);
    };

    WebPrint.prototype.getUri = function(success, fail) {
        return cordova.exec(function(args) {
            success(args);
        }, function(args) {
            fail(args);
        }, 'WebPrint', 'getUri', []);
    };

    WebPrint.prototype.getExtra = function(params, success, fail) {
        return cordova.exec(function(args) {
            success(args);
        }, function(args) {
            fail(args);
        }, 'WebPrint', 'getExtra', [params]);
    };


    WebPrint.prototype.onNewIntent = function(callback) {
        return cordova.exec(function(args) {
            callback(args);
        }, function(args) {
        }, 'WebPrint', 'onNewIntent', []);
    };

    WebPrint.prototype.sendBroadcast = function(params, success, fail) {
        return cordova.exec(function(args) {
            success(args);
        }, function(args) {
            fail(args);
        }, 'WebPrint', 'sendBroadcast', [params]);
    };

    window.webprint = new WebPrint();
    
    // backwards compatibility
    window.plugins = window.plugins || {};
    window.plugins.webprint = window.webprint;
})(window.PhoneGap || window.Cordova || window.cordova);
