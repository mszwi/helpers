"use strict";
exports.__esModule = true;
function getScrollingEl() {
    return window.document.scrollingElement || window.document.body || window.document.documentElement;
}
exports.getScrollingEl = getScrollingEl;
