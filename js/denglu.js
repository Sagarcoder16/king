// JavaScript Document
$(function(){
	
	$(".bt1").click(function(e){
		
		//点击登录时
		var name=$(".shouji-d input").val();
		var password=$(".mima-d input").val();
		
		//cookie获取
		
		var cookies=document.cookie;
		console.log(cookies);
		var arr=cookies.split("; ");//注意要有空
		for(var i=0;i<arr.length;i++){
			arr[i]=arr[i].split("=")[1];
		}

		//判断用户名是否符合
		if(name!=arr[0]){
			alert("用户名或者密码不对");
			e.preventDefault();
			return false;	
		}
		if(password!=arr[1]){
			alert("用户名或者密码不对");
			e.preventDefault();
			return false;
		}
				
	})
	//封装cookie操作函数
	//addcookie
	function addcookie(name,value,expires){
		var str=name+'='+value;
		if(expires){
			document.cookie=str+';expires='+expires;
		}else{
			document.cookie=str;
		}
	}
  	
})