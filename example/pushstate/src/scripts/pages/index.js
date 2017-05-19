var Page = (function () {
	
	function Page(config) {
		
		this.config = config;
		
		this.content = {
		
		};
		
		this.onLoad = onLoad;
		
		return this;
		
	}
	
	function onLoad() {
		console.log('index page loaded');
	}
	
	return Page;
	
});

module.exports = Page;