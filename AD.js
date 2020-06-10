
window.onload=rotate;
var AD=0;
function rotate(){
	"use strict";
	var adImages=new Array("ad1.jpg","ad2.jpg","ad3.jpg");
	AD++;
	if(AD===adImages.length)
	{AD=0;}
	document.getElementById("adBanner").src=adImages[AD];
	setTimeout(rotate,3*1000);}// JavaScript Document