
import { Mongo } from 'meteor/mongo';

API = new Mongo.Collection('API');
var unirest = require('unirest');

//customers.insert({name:"harsh"});
//console.log("========   from  task2.js        =================================================================");
//console.log(customers.find({}));
//console.log("=========================================================================");
//export const customer =customers;
//API = new Mongo.Collection('API');
//API.remove({});


					 	 unirest.post("https://mutualfundsnav.p.mashape.com/")
						.header("X-Mashape-Key", "h9yrVxvaikmshXRFeqJakZlVrqAop19tMgajsnH8Xg7Cso0ZJW")
						
.header("Content-Type", "application/json")
						.header("Accept", "application/json")
						.send({"scodes":[119018,100520,119528,120503,118533]})
						.end( Meteor.bindEnvironment (function (result) { API.remove({});
						console.log("=========RESULT STATUS================================================================");
					  	console.log(result.status);
						console.log("=========RESULT HEADER================================================================");
					 	console.log(result.headers);
						console.log("===========RESULT BODY==============================================================");
						console.log(result.body);								        						//011-6 5 3 6 6 7 5 2
						console.log("=========================================================================");
						
							
							
									
									//API.insert({scode: result.body[i]["scode"]});
  // code to run on server at startup
 if(Meteor.isServer)
{
	console.log("Server");
	console.log(API.find().count());
		for(var i=0;i<5;i++)
		{console.log(result.body[i]["scode"]);
		API.insert({scode: result.body[i]["scode"],date:result.body[i]["date"], nav:result.body[i]["nav"] });
		}
		//Images.insert({img_src:"home1.jpeg",img_alt:"It happens with me most of the time" });
		//Images.insert({img_src:"home2.jpeg",img_alt:"It happens with me most of the time"});
	
	
	console.log("From Server Mains : "+ API.find().count());

	if(Meteor.isServer)
	{console.log("Server from task js file");
		}




						
							}
					        }));


//						console.log("=========================================================================");	
//							console.log(response);		
//						console.log("=========================================================================");
                                  




console.log("=============================asdfsad============================================");
console.log(API.find().fetch());
console.log("=============================asdfasd============================================");
export const api = API;
