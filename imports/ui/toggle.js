import './toggle.html';

var img=[
{
img_src:"t1.png",
img_alt:"Join 1000's of smart investors on Fisdom"

},
{
img_src:"t2.jpg",
img_alt:"Fisdom is SEBI and BESI registered"

},
{
img_src:"t3.png",
img_alt:"Fisdom's mutual fund recommendation has beaten the market"

},
{
img_src:"t4.png",
img_alt:"Fisdom is an award winning website"

}
];
var i=0;

Template.toggle.events({
'click #tb':function(){
			//alert("clicked");
	i=i+1;
	i=i%4;
	$('#ti').attr('src',img[i].img_src);
	$('#tp').text(img[i].img_alt);
}


})
