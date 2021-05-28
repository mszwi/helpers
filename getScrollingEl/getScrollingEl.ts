export function getScrollingEl(): HTMLElement | Element {
    return window.document.scrollingElement || window.document.body || window.document.documentElement;
}