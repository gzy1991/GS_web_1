
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

 
$(document).ready(function(){

/*****************************ajax请求***************************/
function createRequest(){
	var request;
	if(window.XMLHttpRequest){
		request = new XMLHttpRequest();
		return request;
	}else{
		request = new ActiveXObject("Microsoft.XMLHTTP");
		return request;
	}
}	
/*****************************上下滑动效果***************************/
$(".shadow .button").click(function () {	//上下滑动效果
	var d=$(this).attr("href");
    var scroll_offset = $(d).offset();  //得到pos这个div层的offset，包含两个值，top和left

 	$("body").animate({
 	 scrollTop:scroll_offset.top  //让body的scrollTop等于pos的top，就实现了滚动
 	 },500);
});


/*****************************左右滚动***************************/
$(".photoLink").click(function(){  
	var request ; //ajax请求
 	request = createRequest();
 	request.onreadystatechange=function(){
 		if(request.readyState==4){
 			if((request.status>=200&&request.status<=300)||request.status==304){
 				jsonStr=request.responseText;
 				imgArray=JSON.parse(jsonStr);

 				for(var i=0;i<imgArray.length;i++){                           //显示图片
    				$(".photoBackground .memberPhoto").eq(i).attr("src",imgArray[i]);
    			}

 			}else{
 				alert("2请求失败");
 			}
 		}
 		else{
 			alert("1请求失败");
 		}
 	}
	var url="xxx?"+encodeURIComponent("groupName=")+encodeURIComponent(groupName);  //编辑url
 	request.open("get",url,true);
 	request.send(null);




										  //左右滚动
	var firstWidth=$(".about").width(); 
	var secondWidth=$(".group").width();
 	$("body").animate({
 	 scrollLeft:firstWidth  //让body的scrollTop等于pos的top，就实现了滚动
 	 },500);

	$("body").css("overflow-y","hidden");//隐藏导航条
	$(".shadow .button").click(function () {	//返回首页显示滚动条
		$("body").css("overflow-y","auto");
	});

    var groupName = $(this).attr("href");  //动态加载组员图片列表  分页
    //var imgArray = ["images/GCL.jpg","images/GZY.jpg","images/HG.jpg","images/HMC.jpg","images/LDS.jpg","images/MYW.jpg","images/ZH.jpg","images/ZK.png","images/ZX.png"];
 	

/*****************************动态获取图片并显示***************************/
/* 	var request ; //ajax请求
 	request = createRequest();
 	request.onreadystatechange=function(){
 		if(request.readyState==4){
 			if((request.status>=200&&request.status<=300)||request.status==304){
 				jsonStr=request.responseText;
 				imgArray=JSON.parse(jsonStr);

 				for(var i=0;i<imgArray.length;i++){                           //显示图片
    				$(".photoBackground .memberPhoto").eq(i).attr("src",imgArray[i]);
    			}

 			}else{
 				//alert("请求失败");
 			}
 		}
 	}
	var url="xxx?"+encodeURIComponent("groupName=")+encodeURIComponent(groupName);  //编辑url
 	request.open("get",url,true);
 	request.send(null);*/


	return false;
});




});