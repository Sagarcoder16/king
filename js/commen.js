//城市
$(function(){
	var $top = $('#top-Left-1');
	var $box = $('#boxOne');
	var $ul = $box.find('ul');
	var $li = $ul.find('li');
	$box.hide();
	$top.on('mouseover',function(){
		$box.show();
		$top.addClass('top-color');
	}).on('mouseout',function(){
		$box.hide();
		$top.removeClass('top-color');
	});
});
//果园广告
$(function(){
	var $top1 = $('.top-Right-2');
	var $box1 = $('#boxTwo');
	$box1.hide();
	$top1.on('mouseover',function(){
		$box1.show();
		$top1.addClass('top-color');
	}).on('mouseout',function(){
		$box1.hide();
		$top1.removeClass('top-color');
	});
});
//手机果园
$(function(){
	var $top2 = $('.top-Right-4');
	var $box2 = $('.box-three');
	$box2.hide();
	$top2.on('mouseover',function(){
		$box2.show();
		$top2.addClass('top-color');
	}).on('mouseout',function(){
		$box2.hide();
		$top2.removeClass('top-color');
	});
});
//点击返回顶部
$(function(){
	var $top = $('.fixed').find('li').eq(2);
	$top.click(function(){
		$("html,body").animate({scrollTop:0}, 500);
	})
})
//cookie
$(function() {
	//cookie获取
	var $zhuxiao = $("<a style='display:none' href='#'>注销&nbsp;&nbsp;</a>");
	$(".top-Right-1").append($zhuxiao);
	var cookies = document.cookie;
	console.log(cookies);
	var arr = cookies.split("; "); //注意要有空格
	var arr1 = [];
	for (var i = 0; i < arr.length; i++) {
		arr1[i] = arr[i].split("=")[1];
		arr[i] = arr[i].split("=")[0];
	}

	var $str = $("<b style='width:auto'>" + arr1[0] + "</b>");

	if (arr[0] == "name") {
		$(".top-Right-1 a").eq(2).show();
		$(".top-Right-1").append($str);
		$(".top-Right-1 a").eq(0).hide();
		$(".top-Right-1 a").eq(1).hide();
	}
	$(".top-Right-1 a").eq(2).click(function() {
		$(".top-Right-1 a").eq(2).hide();
		$(".top-Right-1 a").eq(0).show();
		$(".top-Right-1 a").eq(1).show();
		removecookie("name");
		removecookie("password");
		$str.remove();
	})

	//封装cookie移除函数
	//removecookie移除cookie中的属性与属性值
	function removecookie(name) {
		var now = new Date();
		document.cookie = name + "=null;expires=" + now;
	}
})