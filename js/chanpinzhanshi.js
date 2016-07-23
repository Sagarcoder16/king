//轮播图
$(function(){
	var $myFruit = $('.my-fruit')
	var $xiaotu = $('.xiaotu');
	var $datu = $('.datu');
	var index  = -1;
	var len = $datu.find('li').length;
	//定时器
	var timer = setInterval(show,2000);
	//原始状态
	show();
	//鼠标移入停止
	$myFruit.on('mouseenter',function(){
		clearInterval(timer);
	}).on('mouseleave',function(){//鼠标移出继续
		timer = setInterval(show,2000);
	});
	//点击下图切换大图
	$xiaotu.on('click','li',function(){
                index = $(this).index()-1;
                show();
            });
	
	function show(){
		if(index>len-2){
			index=-1;
		}
		index++;
		$datu.css({top:-index*560});		
	}
});

//滚动 显示隐藏
$(function(){
	
	$(window).scroll(function(){
		if($(document).scrollTop()>=900){
			$('.part-top1').show();
		}else if($(document).scrollTop()<900){
			$('.part-top1').hide();
		}
	});
});

//点击切换
$(function(){
	var $no1 = $('.no1');
	var $no2 = $('.no2');
	
	$('.part-top-one').click(function(){
		$no1.show();
		$no2.hide();
		$('.part-top-one').addClass('activo').siblings().removeClass('activo');
	});
	
	$('.part-top-two').click(function(){
		$no1.hide();
		$no2.show();
		$('.part-top-two').addClass('activo').siblings().removeClass('activo');
	});
})

//滑过二维码放大
$(function(){
	$('.ma').on('mouseenter',function(){
		$('.ma').find('img').eq(0).hide();
		$('.ma').find('img').eq(1).show();
	}).on('mouseleave',function(){
		$('.ma').find('img').eq(1).hide();
		$('.ma').find('img').eq(0).show();
	})
})

//选择规格

$(function(){
	var $for = $('.guige-two');
	var $two = $('.guige-thr');
	var $jiage = $('.jiage');
	$for.click(function(){
		$for.addClass('activl').siblings().removeClass('activl');
		$jiage.find('span').html('￥99.00');
	});
	$two.click(function(){
		$two.addClass('activl').siblings().removeClass('activl');
		$jiage.find('span').html('￥58.00');
	});
})

//