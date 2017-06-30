import './portfolioImport.html'
var a=1;
Template.portfolioImport.events({
'submit .PI':function(event){
	{ 
	  
	//$('#PIid').text("<h1>You will recieve your prtfolio statement from CAMS in the next few hours</h1>");
	$('#PI123').show();	
	$('#PIid').hide();	
  return false;}

}
})
