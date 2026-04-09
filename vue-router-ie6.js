(function(global) {
    function VueRouter(options) {
        this.routes = options.routes || [];
        this.mode = options.mode || 'hash';
        this.current = '';
        this.app = options.app || null;
        this.init();
    }
    VueRouter.prototype.init = function() {
        var self = this;
        var lastHash = global.location.hash;
        setInterval(function() {
            if (global.location.hash !== lastHash) {
                lastHash = global.location.hash;
                self.match(lastHash.replace(/^#\/?/, '/'));
            }
        }, 100);
        setTimeout(function() {
            self.match(global.location.hash.replace(/^#\/?/, '/') || '/');
        }, 0);
    };
    VueRouter.prototype.match = function(path) {
        this.current = path;
        for (var i = 0; i < this.routes.length; i++) {
            var r = this.routes[i];
            if (r.path === path || (r.path === '*' && !matched)) {
                if (typeof r.component === 'function') {
                    r.component();
                }
                break;
            }
        }
    };
    VueRouter.prototype.push = function(path) {
        global.location.hash = path;
    };
    global.VueRouter = VueRouter;
})(window);
