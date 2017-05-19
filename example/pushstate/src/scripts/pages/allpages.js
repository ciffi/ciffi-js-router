const $ = require('jquery');
const Router = require('ciffi-js-router');

const Page = (function () {
	
	function Page(config) {
		
		this.config = config;
		
		this.onLoad = onLoad;
		
		start();
		
		return this;
		
	}
	
	function onLoad(data) {
		console.log('all pages loaded');
		console.log(data);
	}
	
	function start() {
		$('.js-button').click(function () {
			Router.go($(this).attr('data-route'));
		});
	}
	
	return Page;
	
});

module.exports = Page;