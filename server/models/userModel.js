var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: "User name is required",
		unique: true
	}
});

var userModel = mongoose.model('userModel', userSchema);