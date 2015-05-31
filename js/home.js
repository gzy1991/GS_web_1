
/*function click_scroll() {
	var scroll_offset=document.getElementById("about").offsetTop;
  //var scroll_offset = $("#about").offset();  //得到pos这个div层的offset，包含两个值，top和left
 	// b=document.getElementsByTagName("body");
 	// h=document.getElementsByTagName("html");
 	// b.style.transform="translate(0px,scroll_offset+'px')";
 	// b.scrollTop=scroll_offset;

 	$("body").animate({
 	 scrollTop:scroll_offset  //让body的scrollTop等于pos的top，就实现了滚动
 	 },500);
 }*/

 
$(document).ready(

$(".shadow .button").click(function () {
	var d=$(this).attr("href");
    var scroll_offset = $(d).offset();  //得到pos这个div层的offset，包含两个值，top和left

 	$("body").animate({
 	 scrollTop:scroll_offset.top  //让body的scrollTop等于pos的top，就实现了滚动
 	 },500);
})



);