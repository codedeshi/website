var mongoose = require('mongoose'),
	length = 3,
	questionlength = 8,
	requiredMessage = '{PATH} cannot be empty',
	error = '`{PATH}` should be at least {MINLENGTH} characters.';

var optionsSchema = new mongoose.Schema({ 
	text 		: 	{ 
					type : String, 
					minlength: [length , error],
					required:  requiredMessage,
					trim: true
				},
	votes		:	{ 
					type : Number,
					default: 0
				}
});

var pollsSchema = new mongoose.Schema({
	question	: 	{
					type : String, 
					unique : true, 
					required:  requiredMessage,
					minlength: [questionlength , error],
					trim: true
				},
	addedBy	:	{
					type : String,
					required:  requiredMessage,
	},
	options 	: [optionsSchema,optionsSchema,optionsSchema,optionsSchema]
},  {timestamps: true});

var pollsModel = mongoose.model('pollsModel', pollsSchema);
