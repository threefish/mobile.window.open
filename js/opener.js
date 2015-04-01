/**
 * Created with IntelliJ IDEA.
 * User: 黄川
 * Date Time: 14-8-11上午10:15
 * @parm content_ 需要把body里面内容全部通过 content_ div控制起来
 */
(function (win, doc) {
    var _el = function (id) {
        if (arguments.length == 1 && doc.getElementById || typeof id == 'string') {
            return doc.getElementById(id);
        }
    }, openr = function openr(id, fun) {
        var that = this;
        if (arguments.length == 1) {
            that.fun = function () {
            };
        } else {
            that.fun = fun;
        }
        var flag = true;//唯一性
        var body = doc.getElementsByTagName("body")[0];
        /**
         * 初始化
         */
        function init() {
            var div_ifarme = doc.createElement("div");
            div_ifarme.id = id;
            div_ifarme.setAttribute("style", "position: absolute;left: 0px;top: 0px;display: block;width: auto;z-index: 99999;")
            var div_content = doc.createElement("div");
            div_content.id='content_';
            div_content.innerHTML=body.innerHTML;
            body.innerHTML="";
            body.appendChild(div_content);
            body.appendChild(div_ifarme);
        }
        init();
        that.content = _el('content_');
        that.ifarme = _el(id);
        /**
         * @param url
         * @param urltype 内容类型 @value file(文件) 不符合规则的都按文本页面处理
         */
        that.show = function (url, urltype) {
            if (urltype == 'file') {
                win.location.href = url;
            } else {
                if (flag) {
                    that.content.style.display = 'none';
                    that.ifarme.style.display = 'block';
                    var html = "<iframe  style='overflow-x : hidden; overflow-y : hidden;border: none;' src='" + url + "' width='" + window.innerWidth + "' height='" + window.innerHeight + "'></iframe>";
                    that.ifarme.innerHTML = html;
                } else {
                    console.log("请勿重复操作")
                }
                flag = false;
            }
        }
        /**
         * 关闭删除iframe页面
         */
        that.close = function () {
            that.content.style.display = 'block';
            that.ifarme.style.display = 'none';
            _el(id).innerHTML = '';
            flag = true;
        }
    }
    win.addEventListener("load", function () {
        var ifarme_ = new openr('ifarme_');
        /**
         * opener页面调用函数方法 用ifarme
         * @type {openr}
         * @private
         */
        win.ifarme_ = ifarme_;
        window.open = function (url, urltype) {
            ifarme_.show(url, urltype);
        }
    }, false);
}(window, document));