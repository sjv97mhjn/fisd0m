import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {api} from '../imports/api/tasks2.js';
//import { Mongo } from 'meteor/mongo';
import '../imports/ui/header.js';
import '../imports/ui/toggle.js';
import '../imports/ui/home1.js';
import '../imports/ui/whyFisdom.js';
import './main.html';

import '../imports/ui/promo.js';
//import {customer} from '../imports/api/tasks2.js';
var a=1;

//function example(response){
//Template.example.helpers({data:"sajeev mahajan"});
//console.log("response is "+ response);
//}



import '../imports/ui/portfolioImport.js';
Template.api.helpers({Api: api.find({})});
Template.api.events({

'click .hello':function(event){
		//console.log($(event.target).attr('id'));
		var data=Number($(event.target).attr('id'));	
		console.log("============================");
		$(event.target).hide();
		$('#'+data+'1').show();
		Meteor.call('SECOND-API',data,function(err,res){
			//example(res);
			})
		Template.api.helpers({Api: api.find({})});
				

}
})
	//var Api=api.find({});
	//onsole.log(Api[0]);

//hero = new Mongo.Collection('hero');

//hero.insert({name:'sajeev'});

Router.configure({
	layoutTemplate:'main'
})

Router.route('/whyFisdom');
Router.route('/',{
	template:'home'
});
Router.route('/portfolioImport');
Router.route('/promo');
Router.route('/api');
Router.route('/example');

//var res=Meteor.call('FIRST_API');
//console.log(res);

if(Meteor.isClient)
{
console.log("I am the Client");
var pls=null;
    



//console.log(Meteor.userId());
//console.log(hero.find({name:'sajeev'}));
//hero.update({name:'sajeev'},{$set:{age:13 }})
Accounts.ui.config({
	passwordSignupFields:"USERNAME_AND_EMAIL"
})

}



