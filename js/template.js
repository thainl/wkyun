/*
* @Author: admin
* @Date:   2018-07-23 14:59:25
* @Last Modified by:   admin
* @Last Modified time: 2018-08-03 15:24:06
*/
var c=1;
$('.head-switch').click(function(event) {
	if(c%2==1){
		$('span.head-switch-bar1').addClass('switch-move1');
		$('span.head-switch-bar2').addClass('switch-move2');
		$('.head-right').css('height', '100%');
		$('header .head-right-link a').addClass('showa');
		$('header .head-right-btn').addClass('head-right-btn-show');
	}else{
		$('span.head-switch-bar1').removeClass('switch-move1');
		$('span.head-switch-bar2').removeClass('switch-move2');
		$('.head-right').css('height', '0');
		$('header .head-right-link a').removeClass('showa');
		$('header .head-right-btn').removeClass('head-right-btn-show');
	}
	c++;
});
window.onresize=function() {
	if(window.innerWidth>800){  //加上滚动条的宽度
		$('.head-right').css('height', '0');
	}else{
		if($('span.head-switch-bar1').hasClass('switch-move1')){
			$('.head-right').css('height', '100%');
		}else{
			$('.head-right').css('height', '0');
		}
	}
	// console.log(window.innerWidth)
};
$(window).scroll(function(event) {
	if($(window).scrollTop()==0){
		$('header').css('opacity', '1');
	}else{
		$('header').css('opacity', '0.8');
	}
});


//点击分类标签
$('ul.sort-select>li').click(function(event) {
	$('ul.sort-select>li').children('a').removeClass('curr');
	$(this).children('a').addClass('curr');
});

$('.list-img').hover(function() {
	var a=-($(this).children('img').height()-parseInt($('.list-img-wrap').css('padding-top')))+'px';
	var b='translateY('+a+')';
	$(this).children('img').css('transform', b);
}, function() {
	$(this).children('img').css('transform', '');
});

