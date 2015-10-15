/// <reference path='../../typings/tsd.d.ts' />

import * as angular from 'angular';
import 'angular-ui-router';
import AppComponent from './app.component';

let appModule = angular.module('app', [
	'ui.router',
]).directive('app', AppComponent);

/*
 * As we are using ES6 with Angular 1.x we can't use ng-app directive
 * to bootstrap the application as modules are loaded asynchronously.
 * Instead, we need to bootstrap the application manually
 */
var container = document.getElementById('app-container');
var noAngularDOM;

// angular Bootstrap
angular.element(document).ready(() => {
	if (window.System && window.System.trace) {
		noAngularDOM = container.cloneNode(true);
		if ((!window.System.hotReloader)) {
			window.System.import('capaj/jspm-hot-reloader').then(HotReloader => {
				window.System.hotReloader = new HotReloader.default('http://localhost:8081/');
				window.System.hotReloader.on('change', function(name) {
					console.log(name, 'changed');
				});
			});
		}
	}
	angular.bootstrap(container, [appModule.name], {
		strictDi: true
	});
});

export default appModule;
export function __unload() {
	container = document.getElementById('app-container');
	container.remove();
	document.body.appendChild(noAngularDOM.cloneNode(true));
}
