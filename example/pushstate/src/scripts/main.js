// fastclick
require('fastclick').attach(document.body);

// device
require('./components/device');

// router
import Router from 'ciffi-js-router';
Router.pushState(true);