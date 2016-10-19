var mongoose = require('mongoose');

var uc = require('../controller/usersController.js');  
var pc = require('../controller/pollsController.js');


module.exports = function(app){
	app.post('/user', uc.register);
	app.post('/createPoll', pc.createPoll);
	app.get('/getPolls', pc.getPolls);
	app.get('/getPoll/:id', pc.getPoll);
	app.put('/vote/:id', pc.vote);
	app.delete('/destroy/:id', pc.destroy);
}
