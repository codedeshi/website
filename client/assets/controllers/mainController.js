myApp.controller('mainController', function($routeParams,$location) {

	var self = this;

	this.getClass = function(path){
		return ($location.path() === path) ? 'active' : 'inactive';
	}
	this.getLiClass = function(path){
		return ($location.path() === path) ? 'activeLi' : 'inactiveLi';
	}
	this.getPortfolioClass = function(){
		return (['/python','/ruby','/mean'].indexOf($location.path() ) >=0) ? 'active' : 'inactive';
	}
	this.getBackgroundClass = function() {
		var pathjson = { 
			"/python" : 'pythonPage',
			"/ruby"		: 'rubyPage',
			"/mean"		: 'meanPage',
			"/cv"			: 'cvPage',
			"/contact": 'contactPage',
			'/'				: "mainPage"
		}
		console.log(pathjson[$location.path()]);
		return(pathjson[$location.path()]);
	}
})