import { Meteor } from 'meteor/meteor';


import { Mongo } from 'meteor/mongo';

var unirest = require('unirest');

import  { api } from '../imports/api/tasks2.js' 

//export const Tasks = new Mongo.Collection('tasks');
import '../imports/api/tasks.js';

Meteor.startup(() => {

//console.log("Before on create user");
//console.log(this.userId());
 
//console.log("==============================     from server.js ===========================================");
//console.log(customer.find({}));


	//Accounts.onCreateUser(function(options, user) {
    //pass the surname in the options
	//console.log(options.profile["surname"]);
	//users.update({_id : user._id},{$set:{surname: options.profile["surname"] }});
    //user.profile['surname'] = options.profile["surname"]
	//console.log(user);
    //return user
//}


});

Meteor.methods({

'SECOND-API':function(data){
		 unirest.post("https://mutualfundsnav.p.mashape.com/")
		.header("X-Mashape-Key", "h9yrVxvaikmshXRFeqJakZlVrqAop19tMgajsnH8Xg7Cso0ZJW")
		.header("Content-Type", "application/json")
		.header("Accept", "application/json")
		.send({"search":data})
		.end(  Meteor.bindEnvironment (function (result) {
		console.log("==================================88888888888888888888888888===========================");		
  		console.log( result.body);
		console.log("==================================888888888888888888888888888===========================")
api.update( {scode:data} ,{$set: {name: result.body[0]["name"], growth: result.body[0]["isin_growth"],amc:result.body[0]["amc"]}},function(err,res){
			if(err) console.log("ERROR");
			else console.log("================================         "+res);
				})		
		return result.body;
}));

}






})
    

    // query the API

   // var response = HTTP.post("https://mutualfundsnav.p.mashape.com/").data;


