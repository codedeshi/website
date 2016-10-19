myApp.factory('pollsFactory', function($http,$routeParams) {
		function pollsFactory(){
		var _this = this;

		this.createPoll = function(newPoll,callback){
			$http.post("/createPoll",newPoll).then(function(returnedData){
				if (returnedData.data.errors.length == 0) {
					callback(returnedData.data.data);
				}
				else {
					callback(returnedData.data.errors)
				}
			})
		}
		this.getPolls = function(callback){
			$http.get("/getPolls").then(function(returnedData){
				callback(returnedData.data);
			})
		}
		this.getPoll = function(id,callback){
			$http.get("/getPoll/"+id).then(function(returnedData){
				callback(returnedData.data);
			})
		}
		this.vote = function(id,callback){
			$http.put("/vote/"+id).then(function(returnedData){
				callback(returnedData.data);
			})
		}
		this.destroy = function(id,callback){
			$http.delete("/destroy/"+id).then(function(res){
				callback(res);
			})
		}
	}
	return new pollsFactory();
});
