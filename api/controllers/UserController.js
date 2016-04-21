/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 var AWS = require('aws-sdk');
 var vogels = require("vogels");
 var Joi = require("joi");

 vogels.AWS.config.loadFromPath("credentials.json");
 var opts = { endpoint : 'http://localhost:8000'};
 vogels.dynamoDriver(new AWS.DynamoDB(opts));
module.exports = {
	index: (req, res) => {
		console.log(Joi);
		console.log(vogels);
	res.json({
		text: "This is from API."
	});
}

};
