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
    }


};

/**
 * Tab Component
 * @param config
 */
function Tab(config) {
    this._root = config.root;
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
};