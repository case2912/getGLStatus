var vogels = require('vogels');
var Joi = require('joi');
vogels.AWS.config.loadFromPath('credentials.json');
vogels.AWS.config.update({region:"us-west-2"});

var NewTable = vogels.define("NewTable",{
  hashKey:"ID",
  schema:{
    ID:Joi.string(),
    Num:Joi.number(),
    boolean:Joi.boolean()
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
    ID:"334433",
    Num:443344,
    boolean:true
  },(err)=>{
    if(err){
      console.log("Error has occured",err);
    }else{
      console.log("Inserted element successfully");
    }
  });
}
createTable().then(()=>{insertElement()});
// NewTable.destroy('!!', function (err) {
//   console.log('account deleted');
// });
var get = function(){
  NewTable.get('HELLO', function (err, acc) {
    console.log('got account', acc.get('ID'),acc.get('Num'));
  });
}

var update = function(){
  return new Promise(function(resolve, reject){
    NewTable.update({ID:'HELLO',  Num:34567}, function(err, acc){
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

//update().then(()=>{get()});
