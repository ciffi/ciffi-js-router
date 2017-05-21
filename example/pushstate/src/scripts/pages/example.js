var Page = (function () {
	
	function Page(config) {
		
		this.config = config;
		
		this.content = {
			prova: [1, 2, 3, 4, 5, 6, 7, 8, 9]
		};
		
		this.onLoad = onLoad;
		
		return this;
		
	}
	
	function onLoad(data) {
		console.log('example page loaded');
		console.log(data);
	}
	
	return Page;
	
});

module.exports = Page;