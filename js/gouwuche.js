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
jQuery(function($){
	//获取cookie，把商品信息写入#cartList
	render();

	// 点击删除cookie
	$('.cart-order').on('click','.btnclose',function(){
		var $li = $(this).closest('li');
		var goodsname = $li.attr('data-goodsname');

		// 把过期时间设置成昨天
		var now = new Date();
		now.setDate(now.getDate()-100);

		// 删除cookie
		document.cookie = goodsname + '=null;expires=' + now;

		// 移除html
		$li.remove();

		// location.reload();
		
		render();
	});


			function render(){
				var _cookie = document.cookie.split('; ');
				// 遍历cookie
				var $ul = $('<ul/>');
				var subPrice = 0;
				if(_cookie != '' ){
					$.each(_cookie,function(idx,val){
						var info = JSON.parse(val.split('=')[1]);						
						var $li = $('<li/>').attr('data-goodname',val.split('=')[0]);
						var $img = $('<img/>').attr('src',info.imgurl);
						var $title = $('<p/>').text(info.name);
						var $price = $('<p/>').html(info.price + '&times;' + info.qty);
						var $btnClose = $('<span/>').addClass('btnclose').html('删除');
						$li.append([$img,$title,$price,$btnClose]).appendTo($ul);
						
						
						// 计算总价
						subPrice += info.price * info.qty;
					});
				}
				
				$('.cart-order').empty();
				$ul.appendTo('.cart-order');
				$subPrice = $('<div />').addClass('subPrice');
				$subPrice.appendTo('.cart-order')

				// toFixed(n): 保持小数点后n位，自动四舍五入，返回一个字符串
				$('.subPrice').html('&yen;' + subPrice.toFixed(2))
			}
		});