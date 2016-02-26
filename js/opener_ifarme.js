window.opener = null;
window.opener = window.parent;
window.parent.opener = null;
window.parent.opener = window.parent;
window.close = null;
window.close = function () {
    window.parent.ifarme_.close();
}
history.back = null;
history.back = window.close;
