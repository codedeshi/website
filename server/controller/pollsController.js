var mongoose = require('mongoose');
var Polls = mongoose.model('pollsModel');

function pollsController(){
	var votes;

	this.createPoll = function(req,res){
		var error =[];
		var data = {
			question: req.body.question,
			addedBy: req.body.addedBy,
			options: [{text:req.body.option1},
			{text:req.body.option2},
			{text:req.body.option3},
			{text:req.body.option4}]
		}
		var poll = new Polls(data);
		poll.save(function(err,data) {
			if(err) {
				for(key in err.errors){
					error.push(err.errors[key].message)
				}
				res.json({errors: error,data:data});
			}
			else {
				res.json({errors:error,data:data})
			}			
		});
	}
	this.getPolls = function(req,res){
		Polls.find({},function(err,data){
			res.json(data);
		})
	}
	this.getPoll = function(req,res){
		Polls.find({_id:req.params.id},function(err,data){
			res.json(data);
		})
	}
	this.vote = function(req,res){
		Polls.update({"options._id": req.params.id},{$inc:{"options.$.votes":1}},function(err,data){
			res.json({err:err,data:data});
		})
	}
	this.destroy = function(req,res){
		Polls.remove({_id:req.params.id},function(err,data){
			res.json({err:err,data:data});
		})
	}
}

module.exports = new pollsController();