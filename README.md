[npm-month]: https://img.shields.io/npm/dm/ciffi-js-router.svg
[npm-total]: https://img.shields.io/npm/dt/ciffi-js-router.svg
[npm-version]: https://img.shields.io/npm/v/ciffi-js-router.svg
[npm-url]: https://www.npmjs.com/package/ciffi-js-router

[![npm-version][npm-version]][npm-url]
[![npm-month][npm-month]][npm-url]
[![npm-total][npm-total]][npm-url]
[![Join the chat at https://gitter.im/ciffi-js/Lobby](https://badges.gitter.im/ciffi-js/Lobby.svg)](https://gitter.im/ciffi-js/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# ciffi-js-router
JS Router for [Ciffi-js](https://www.npmjs.com/package/ciffi) based projects

* import in main.js
* enable/disable pushState with twig template 
```javascript
require('ciffi-js-router').pushState(false);
```

* define env config in src/scripts/config/config.js
```javascript
var Config = {
    projectName: 'my-site',
    env: {
        dev: {
            baseUrl: 'http://localhost',
            apiUrl: 'http://my-site.local/',
            shareUrl: 'http://localhost',
            assetsUrl: '/dev/'
        },
        local: {
            baseUrl: 'http://my-site.local',
            apiUrl: 'http://my-site.local/',
            shareUrl: 'http://my-site.local/',
            assetsUrl: 'http://my-site.local/src/'
        },
        stage: {
            baseUrl: 'http://my-site.stage.it',
            apiUrl: 'http://my-site.stage.it/',
            shareUrl: 'http://my-site.stage.it/',
            assetsUrl: 'http://my-site.stage.it/src/'
        },
        prod: {
            baseUrl: 'http://www.my-site.it',
            apiUrl: 'http://www.my-site.it',
            shareUrl: 'http://www.my-site.it',
            assetsUrl: 'http://www.my-site.it/src/'
        }
    }
    };

module.exports = Config;
```

* define pages modules in src/scripts/config/pages.js
```javascript
var Pages = {
    '.js-router--home': 'index',
    '.js-router--example': 'example',
    '.js-router--test-one': 'test/one'
};

module.exports = Pages;
```

* create pages modules in src/scripts/pages/
* config is current env config defined in src/scripts/config/config.js
* define this.content if pushState is active and you want load a relative twig view
* this.onLoad will be called on each document.onLoad or urlChange and twig template render events 
```javascript
var Page = (function () {
	
    function Page(config) {
        
        this.config = config;
        
        this.content = {
            prova: [1, 2, 3, 4, 5, 6, 7, 8, 9]
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
```


__full documentation available at [ciffi.it/ciffi-js](https://www.ciffi.it/ciffi-js/docs/router)__