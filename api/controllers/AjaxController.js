/**
 * AjaxController
 *
 * @description :: Server-side logic for managing ajaxes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	record:(req,res)=>{
		//console.log(req.allParams());
		//console.log(req.headers);
		res.send("This is TEST");
		var vogels = require('vogels');
		var Joi = require('joi');
		vogels.AWS.config.loadFromPath('credentials.json');
		vogels.AWS.config.update({region:"us-west-2"});

		var NewTable = vogels.define("NewTable",{
		  hashKey:"ID",
		  schema:{
		    ID:Joi.string(),
		    Num:Joi.number()
		  }
		});
		var createTable = function(){
		  return new Promise(function(resolve, reject){
		    vogels.createTables((err)=>{
		      if(err){
		        reject("Error has occured!",err)
		      }else{
		        console.log("Table was created without error");
		        resolve();
		      }
		    });
		  });
		};

		var insertElement = function(){
		  NewTable.create({
		    ID:"!!",
		    Num:1111
		  },(err)=>{
		    if(err){
		      console.log("Error has occured",err);
		    }else{
		      console.log("Inserted element successfully");
		    }
		  });
		}
		var get = function(){
		  NewTable.get('HELLO', function (err, acc) {
		    console.log('got account', acc.get('ID'),acc.get('Num'));
		  });
		}

		var update = function(){
		  return new Promise(function(resolve, reject){
		    NewTable.update({ID:'HELLO',  Num:12345}, function(err, acc){
		      if(err){
		        console.log('update error', err);
		        reject();
		      }else {
		      console.log('update account');
		      resolve();
		      }
		    });
		  });
		}
		//createTable().then(()=>{insertElement()});
		update().then(()=>{get()});

	}
};
