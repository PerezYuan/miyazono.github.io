/**
 * miyazono.js 简单的弹出窗插件
 * @author yuanzimin
 * @time 2015-11-23
 */

define('miyazono', ['tips'], function(TipsDialog) {
    'use strict';
    $.extend({
        Tips : function (options) {
            let tipsDialog = new TipsDialog(options);
        }
    });
});