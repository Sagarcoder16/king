//城市
$(function() {
	var $top = $('#top-Left-1');
	var $box = $('#boxOne');
	var $ul = $box.find('ul');
	var $li = $ul.find('li');
	$box.hide();
	$top.on('mouseover', function() {
		$box.show();
		$top.addClass('top-color');
	}).on('mouseout', function() {
		$box.hide();
		$top.removeClass('top-color');
	});
});
//果园广告
$(function() {
	var $top1 = $('.top-Right-2');
	var $box1 = $('#boxTwo');
	$box1.hide();
	$top1.on('mouseover', function() {
		$box1.show();
		$top1.addClass('top-color');
	}).on('mouseout', function() {
		$box1.hide();
		$top1.removeClass('top-color');
	});
});
//手机果园
$(function() {
	var $top2 = $('.top-Right-4');
	var $box2 = $('.box-three');
	$box2.hide();
	$top2.on('mouseover', function() {
		$box2.show();
		$top2.addClass('top-color');
	}).on('mouseout', function() {
		$box2.hide();
		$top2.removeClass('top-color');
	});
});

//轮播图
$(function() {
	var $banner = $('.banner');
	var $tu = $('.banner-one');
	var $dian = $('.banner-two');
	var index = -1;
	var len = $tu.find('li').length;

	var timer = setInterval(show, 2000);
	show();

	$banner.on('mouseenter', function() {
		clearInterval(timer);
	}).on('mouseleave', function() {
		timer = setInterval(show, 2000);
	})

	$dian.on('click', 'li', function() {
		index = $(this).index() - 1;
		show();
	});

	function show() {
		if (index > len - 2) {
			index = -1;
		}
		index++;
		$tu.css({
			left: -index * 1280
		});
		$dian.children('li').eq(index).addClass('activn').siblings().removeClass('activn')
	}
});

//点击返回顶部
$(function() {
	var $top = $('.fixed').find('li').eq(2);
	$top.click(function() {
		$("html,body").animate({
			scrollTop: 0
		}, 500);
	})
})

//商品鼠标滑过效果
$(function() {
	var $bannerdatu = $('.banner-datu');
	var $li = $('.banner2-list').find('li');

	var $li1 = $('.banner3-list').find('li');

	$li.on('mouseenter', 'a', function() {
		$(this).find('img').not($bannerdatu).animate({
			left: -13,
			top: -13,
			width: 270,
			height: 270
		})
	}).on('mouseleave', 'a', function() {
		$(this).find('img').not($bannerdatu).animate({
			left: 0,
			top: 0,
			width: 248,
			height: 248
		})
	})
	$bannerdatu.on('mouseenter', function() {
		$(this).animate({
			left: -13,
			top: -13,
			width: 270,
			height: 635
		});
	}).on('mouseleave', function() {
		$(this).animate({
			left: 0,
			top: 0,
			width: 248,
			height: 610
		});
	})

	$li1.on('mouseenter', 'a', function() {
		$(this).find('img').animate({
			left: -13,
			top: -13,
			width: 270,
			height: 270
		})
	}).on('mouseleave', 'a', function() {
		$(this).find('img').animate({
			left: 0,
			top: 0,
			width: 248,
			height: 248
		})
	})
});


//弹出窗口
$(function(){
	$('.s-che').on('click','img',function(){
		$('#box').show()
		$('.hide-box').show()
	})
	$('#box').on('click','.show',function(){
		$('#box').hide()
		$('.hide-box').hide()
	})
	$('.close').click(function(){
		$('#box').hide()
		$('.hide-box').hide()
	})
})
	




//加入购物车
$(function() {
	// 点击按钮时，把商品信息存入cookie
	$('.s-che').on('click', 'img', function() {
		
		var $div = $(this).parent('div');
		var $div2 = $div.parent('div');
		var $li = $div2.parent('li');		
		var $price = $li.children('.s-unit');

		var index = $li.index();
		var goodName = 'goods' + index;

		// 创建一个空对象，用来保存商品信息
		var value = {};
		value.imgurl = $li.find('img').eq(0).attr('src');
		value.name = $div.prev().prev().text();
		value.price = $div.prev().text();

		// 写入商品数量
		var lastCookie = document.cookie;
		if(lastCookie.indexOf(goodName) != -1){
			// 遍历cookie，获取原来的数量
			$.each(lastCookie.split('; '),function(idx,val){
				
				var name = val.split('=')[0];
				if(name == goodName){
					value.qty = JSON.parse(val.split('=')[1]).qty + 1;

					// 得到当前商品数量后，没必要再遍历后面的商品，所以直接退出
					return false;
				}
			});
		}else{
			value.qty = 1;
		}

		// JSON.parse():把json字符串转换成json对象
		// JSON.stringify():把json对象转换成json字符串（JSON.parse的逆向操作）
		var _cookie = goodName + '=' + JSON.stringify(value);
		console.log(_cookie)
		// name:goods0=
		document.cookie = _cookie;
	});
});