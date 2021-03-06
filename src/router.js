var UserConfig = require("../../../src/scripts/config/config");
var RouterConfig = require("./libs/router-config.min");
var CONFIG = new RouterConfig(UserConfig.env);
var Pages = require("../../../src/scripts/config/pages");
var PushState = require("./libs/pushstate.min");
var $ = require("jquery");
var Router = function () {
	var _ALLPAGES = "allpages";
	
	function Router(pages) {
		checkConfig(pages, $.proxy(function () {
			this.pages = JSON.stringify(pages).length === 2 ? false : pages;
			this.history = {pages: [], modules: {}};
			this.init()
		}, this))
	}
	
	function checkConfig(pages, successCallback) {
		var errorMessage = false;
		if (pages && typeof pages === "object") {
			if (!errorMessage) {
				successCallback()
			}
		}
	}
	
	function checkRoute(routes) {
		var _currentRoute = false;
		$.each(routes, function (index, route) {
			if ($(index).length > 0) {
				_currentRoute = {trigger: index, route: route}
			}
		});
		return _currentRoute
	}
	
	function onPagesLoaded(pages, currentRoute) {
		document.body.classList.add("app-is-ready");
		var _allPages = require("../../../src/scripts/pages/" + _ALLPAGES)();
		if (currentRoute) {
			new _allPages(CONFIG).onLoad(currentRoute.route);
			var _currentPage = require("../../../src/scripts/pages/" + currentRoute.route)();
			new _currentPage(CONFIG).onLoad();
		} else {
			new _allPages(CONFIG).onLoad(false);
		}
	}
	
	function onPushStateChange(history, pages, currentRoute, params, allPages) {
		if (pages && pages[currentRoute] && history.pages.indexOf(currentRoute) < 0) {
			history.pages.push(currentRoute);
			var _currentPage = require("../../../src/scripts/pages/" + pages[currentRoute])();
			history.modules[currentRoute] = new _currentPage(CONFIG)
		}
		if (history.modules[currentRoute]) {
			var _containerView = $("c-view");
			var _content = history.modules[currentRoute].content;
			this.currentRoute = currentRoute;
			this.containerView = _containerView;
			renderTemplate.bind(this)(_content);
			history.modules[currentRoute].onLoad({module: pages[currentRoute], route: currentRoute, params: params})
		}
		allPages.onLoad({module: pages[currentRoute], route: currentRoute, params: params})
	}
	
	function renderTemplate(content) {
		if (content) {
			var _template = require("../../../src/views/" + this.currentRoute + ".html.twig");
			this.containerView.html(_template(content))
		}
	}
	
	Router.prototype.init = function () {
		if (CONFIG.env === "local") {
			document.write('<script src="' + CONFIG.baseUrl + ':35729/livereload.js?snipver=1" async="" defer=""></script>')
		}
	};
	Router.prototype.pushState = function (val) {
		if (val) {
			document.body.classList.add("app-is-ready");
			var _allPages = require("../../../src/scripts/pages/" + _ALLPAGES)(CONFIG);
			var _allPagesClass = new _allPages(CONFIG);
			this.isPushStateEnabled = PushState.checkSupport();
			if (this.isPushStateEnabled) {
				PushState.watcher(this.pages, $.proxy(function (data) {
					var _routes = this.pages;
					var _currentRoute = data.url;
					var _params = data.params;
					onPushStateChange.bind(this)(this.history, _routes, _currentRoute, _params, _allPagesClass)
				}, this))
			}
			var _requestRoute = window.location.pathname.replace("/", "");
			if (this.pages.hasOwnProperty(_requestRoute)) {
				PushState.push({url: _requestRoute}, _requestRoute)
			} else if (!this.pages || !this.pages.hasOwnProperty(_requestRoute)) {
				PushState.push({url: _requestRoute}, _requestRoute)
			} else {
				var _count = 0;
				$.each(this.pages, function (url) {
					if (_count++ === 0) {
						PushState.push({url: url}, "")
					}
				})
			}
			return this.isPushStateEnabled
		} else {
			var _routes = this.pages;
			onPagesLoaded(_routes, checkRoute(_routes));
			return "pushState disabled"
		}
	};
	Router.prototype.render = function (content) {
		renderTemplate.bind(this)(content);
		this.history.modules[this.currentRoute].onLoad()
	};
	Router.prototype.go = function (content, params) {
		var _content = content === '/' ? '' : content;
		var _params = params || undefined;
		PushState.push({url: content, params: _params}, _content)
	};
	return new Router(Pages)
}();
module.exports = Router;