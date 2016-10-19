var myApp = angular.module('myApp', ['ngRoute','ngCookies']);

myApp.config(function ($routeProvider) {
$routeProvider
	.when('/', {
	templateUrl: 'partials/index.html',
	controller: 'mainController as mc'
	})
	.when('/cv', {
	templateUrl: 'partials/cv.html',
	controller: 'mainController as mc'
	})
	.when('/python', {
	templateUrl: 'partials/python.html',
	controller: 'mainController as mc'
	})
	.when('/mean', {
	templateUrl: 'partials/mean.html',
	controller: 'mainController as mc'
	})
	.when('/ruby', {
	templateUrl: 'partials/ruby.html',
	controller: 'mainController as mc'
	})
	.when('/contact', {
	templateUrl: 'partials/contact.html',
	controller: 'mainController as mc'
	})
	.otherwise({
	redirectTo: '/'
	});
});
