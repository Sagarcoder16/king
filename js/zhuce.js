// JavaScript Document
$(function(){
	var name;
	var password;
	var checkpassword;
	var state=0;
	$(".yanzheng-Right input").blur(function(){
		
		name=$(".shouji input");
		password=$(".mima input");
		checkpassword=$(".qrmima input");
		name.next().hide();
		password.next().hide();
		checkpassword.next().hide();
		
		
		name.next().html("");
		password.next().html("");
		checkpassword.next().html("");
		//验证用户名是否邮箱
		var reg=/^\w[\w\-\.]*@[0-9a-zA-Z\-]{2,}\.[a-zA-Z]{2,}$/;
		if(!reg.test(name.val())){
			//验证用户名是否手机号码
			reg=/^1[34578]\d{9}$/;
			if(!reg.test(name.val())){
				name.css({borderColor:"red"});
				name.next().show().html('用户名错误,请输入邮箱或手机号码!');
				return;
			}
		}
		name.css({borderColor:"#c1c1c1"});
		
		//验证密码长度小于20，不能有空格
		if(!/^\S{1,20}$/.test(password.val())){
			password.css({borderColor:"red"});
			password.next().show().html("密码格式不对，密码长度限制为6-20位字符!");
			return;
		}
		password.css({borderColor:"#c1c1c1"});
		
		if(checkpassword.val()!=password.val()){
			checkpassword.css({borderColor:"red"});
			checkpassword.next().show().html("请确认密码");
			return;
		}
		checkpassword.css({borderColor:"#c1c1c1"});
		state=1;
	})
	//提交时
	$(".bt1").click(function(e){
		//再进行一次判断,全部符合state就会返回1
		$(".main_content_L input").trigger("blur");
		//验证不成功的话
	    if(state==0){
			alert("注册不成功");
		  	return false;//阻止浏览器默认行为
		}
		//验证成功的话放到cookie
		state=0;
		var date=new Date();
		date.setDate(date.getDate()+30);
		addcookie("name",name.val(),date);
		addcookie("password",password.val(),date);
		alert("注册成功");
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