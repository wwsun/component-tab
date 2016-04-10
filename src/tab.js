/**
 * Tab Component
 * Created by wwsun on 16/4/10.
 */

var utils = {

    /**
     *
     * Binding event with the specified DOM node
     *
     * @param node
     * @param eventType
     * @param handler
     * @param scope
     */
    setEvent: function (node, eventType, handler, scope) {
        node = typeof node === 'string' ? document.getElementById(node) : node;
        scope = scope || node;

        node.addEventListener(eventType, function () {
            handler.apply(scope, arguments);
        });
    },

    /**
     * add class for the specified node
     * @param node
     * @param str
     */
    addClass: function (node, str) {
        if (!new RegExp('(^|\\s+)' + str).test(node.className)) {
            node.className += " " + str;
        }
    },

    /**
     * remove class for the specified node
     * @param node
     * @param str
     */
    removeClass: function (node, str) {
        node.className = node.className.replace(new RegExp("(^|\\s+)" + str), "");
    }


};

/**
 * Tab Component
 * @param config
 */
function Tab(config) {
    this._root = config.root;
    this._currentClass = config.currentClass;
    var trigger = config.trigger || 'click';

    this._tabMenus = this._root.getElementsByClassName('tab-menu');
    this._tabContents = this._root.getElementsByClassName('tab-content');

    var self = this;

    var i,
        n;
    for (i = 0, n = this._tabMenus.length; i < n; i++) {
        this._tabMenus[i]._index = i;
        utils.setEvent(this._tabMenus[i], trigger, function () {
            self.showItem(this._index);
        });
    }
}

Tab.prototype.showItem = function (n) {
    var i;
    for (i = 0; i < this._tabContents.length; i++) {
        this._tabContents[i].style.display = 'none';
    }
    this._tabContents[n].style.display = 'block';

    if (this._currentClass) {
        var currentMenu = this._root.getElementsByClassName(this._currentClass)[0];
        if (currentMenu) {
            utils.removeClass(currentMenu, this._currentClass);
        }
        utils.addClass(this._tabMenus[n], this._currentClass);
    }
};