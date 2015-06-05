
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

var groupName;         //组名
 
$(document).ready(function(){

function createRequest(){  //创建ajax请求
	var request;
	if(window.XMLHttpRequest){
		request = new XMLHttpRequest();
		return request;
	}else{
		request = new ActiveXObject("Microsoft.XMLHTTP");
		return request;
	}
}
function loadImage (urlArray) {   //异步加载图片
	var imgArrays = document.getElementsByClassName("memberPhoto");
	var personNames=document.getElementsByClassName("nameStyle");
	for (var i = 0; i<urlArray.length; i++) {
		imgArrays[i].onload=function(){
			imgArrays[i].onload=null;	
		}	
		imgArrays[i].src=urlArray[i].imgUrl;//图片对象地址
		personNames[i].innerText=urlArray[i].userName;
	}

}

function sendRequest(){
	                       //发送请求  动态加载组员图片列表  分页
	var request ; //ajax请求
 	request = createRequest();
 	request.onreadystatechange=function(){
 		if(request.readyState==4){
 			if((request.status>=200&&request.status<=300)||request.status==304){
 				var jsonStr=request.responseText;
 				var imgArray=JSON.parse(jsonStr);
 				loadImage (imgArray) ; //预加载图片并显示
 				/*for(var i=0;i<imgArray.length;i++){                           //显示图片
    				$(".photoBackground .memberPhoto").eq(i).attr("src",imgArray[i]);
    			}*/

 			}else{
 				alert("2请求失败");
 			}
 		}
 	}
	var url=groupName+"?"+encodeURIComponent("groupName=")+encodeURIComponent(groupName);  //编辑url
 	request.open("get",url,true);
 	request.send(null);

}

/******************************上下滑动效果***************************/
$(".shadow .button").click(function () {	//上下滑动效果
	var d=$(this).attr("href");
    var scroll_offset = $(d).offset();  //得到pos这个div层的offset，包含两个值，top和left

 	$("body").animate({
 	 scrollTop:scroll_offset.top  //让body的scrollTop等于pos的top，就实现了滚动
 	 },500);
});


$(".photoLink").click(function(){  

	groupName = $(this).attr("id"); 
	var $groupImg=$(".groupName");
	var url="images/"+ groupName +".png";
	$groupImg.attr("src",url);
/*****************************左右滚动***************************/
	var firstWidth=$(".about").width(); 
	var secondWidth=$(".group").width();
 	$("body").animate({
 	 scrollLeft:firstWidth  //让body的scrollTop等于pos的top，就实现了滚动
 	 },500);

	$("body").css("overflow-y","hidden");//隐藏导航条
	$(".shadow .button").click(function () {	//返回首页显示滚动条
		$("body").css("overflow-y","auto");
	});

    //var imgArray = ["images/GCL.jpg","images/GZY.jpg","images/HG.jpg","images/HMC.jpg","images/LDS.jpg","images/MYW.jpg","images/ZH.jpg","images/ZK.png","images/ZX.png"];
	/*****************************异步加载图片***************************/
	sendRequest();
	return false;

});




});