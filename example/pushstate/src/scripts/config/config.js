var Config = {
	projectName: 'router',
	env: {
		dev: {
			baseUrl: 'http://localhost',
			apiUrl: 'http://router.local/',
			shareUrl: 'http://localhost',
			assetsUrl: '/dev/'
		},
		local: {
			baseUrl: 'http://router.local',
			apiUrl: 'http://router.local/',
			shareUrl: 'http://router.local/',
			assetsUrl: 'http://router.local/src/'
		},
		stage: {
			baseUrl: 'http://router.stage.it',
			apiUrl: 'http://router.stage.it/',
			shareUrl: 'http://router.stage.it/',
			assetsUrl: 'http://router.stage.it/src/'
		},
		prod: {
			baseUrl: 'http://www.router.it',
			apiUrl: 'http://www.router.it',
			shareUrl: 'http://www.router.it',
			assetsUrl: 'http://www.router.it/src/'
		}
	}
};

module.exports = Config;