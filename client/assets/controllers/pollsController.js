myApp.controller('pollsController', function($routeParams,$location, pollsFactory, userFactory,$cookies) {
	var self = this;
	this.newPoll = {};
	this.pollsCreateError = [];
	this.cu = $cookies.getObject('current_user');

	this.logCheck = function(){
		if (!this.cu) {
			$location.path('/');
		}
	}

	this.getPolls = function(){
		this.logCheck();
			pollsFactory.getPolls(function(returnData){
				self.allPolls = returnData;
			})
	}
	this.getPoll = function(){
		this.logCheck();
		pollsFactory.getPoll($routeParams.id,function(poll){
			if(poll.length==1){
				self.singlePoll = poll[0];
			}
		})
	}
	this.createPoll = function() {
		this.logCheck();
		this.newPoll.addedBy = self.cu.username;
		pollsFactory.createPoll(this.newPoll,function(returnData) {
			if (returnData.length){
				self.pollsCreateError  = returnData;
				$location.path("/createPoll");
			}
			else {
				self.newPoll = {};
				$location.path("/polls");
			}
		});
	}
	this.vote = function(id) {
		this.logCheck();
		pollsFactory.vote(id,function(returnData){
			self.getPoll();
		})
	}
	this.destroy = function(id){
		this.logCheck();
		pollsFactory.destroy(id,function(res){
			self.getPolls();
		})
	}
})
