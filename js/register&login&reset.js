/*
* @Author: thain
* @Date:   2018-07-01 20:52:55
* @Last Modified by:   admin
* @Last Modified time: 2018-07-24 15:21:13
*/
// 导航栏
var b=1;
$('.navbar-header button').click(function(event) {
	if(b%2==1){
		$('.nav-link-extend').show();
	}else{
		$('.nav-link-extend').hide();
	}
	b++;
});
// 切换页面
function clearcss(){
	// 切换前先清样式
	$('input').val('');
	$('input').removeClass('green red');
	$('span.error').html('');
	$('span.error').css('display', 'none');
	$('button.mybtn').css({
		opacity: '0.65',
		cursor: 'auto'
	});
	$('button.mybtn').attr('disabled', 'disabled');
	phoneflag=false;
	passflag=false;
	codeflag=false;
	emailflag=false;
	key=false;
	upval=0;
	downval=0;
	upval2=0;
	downval2=0;
}
// 注册页面切换按钮
var cont;
$('.wrap').on('click', '.register .login-link', function(event) {  //切换到登录
	clearcss();
	$('.register').removeClass('fadeOutLeftBig bounceInRight');
	$('.login').removeClass('fadeOutLeftBig bounceInRight');
	$('.reset').removeClass('fadeOutLeftBig bounceInRight');
	$('.register ').addClass('fadeOutLeftBig');
	setTimeout(function(){
		$('.register ').hide();
	},300)
	$('.login').show();
	$('.login').addClass('bounceInRight');
});
// 登录页面切换按钮
$('.wrap').on('click', '.login .register-link', function(event) { //切换到注册
	clearcss();
	$('.login ').removeClass('fadeOutLeftBig bounceInRight');
	$('.register').removeClass('fadeOutLeftBig bounceInRight');
	$('.reset').removeClass('fadeOutLeftBig bounceInRight');
	$('.login ').addClass('fadeOutLeftBig');
	setTimeout(function(){
		$('.login ').hide();
	},300)
	$('.register').show();
	$('.register').addClass('bounceInRight');
});
$('.wrap').on('click', '.login .reset-link', function(event) { //切换到重置
	clearcss();
	$('.login ').removeClass('fadeOutLeftBig bounceInRight');
	$('.register').removeClass('fadeOutLeftBig bounceInRight');
	$('.reset').removeClass('fadeOutLeftBig bounceInRight');
	$('.login ').addClass('fadeOutLeftBig');
	setTimeout(function(){
		$('.login ').hide();
	},300)
	$('.reset').show();
	$('.reset').addClass('bounceInRight');
});
//重置页面切换按钮
$('.wrap').on('click', '.reset .reset-login-link', function(event) { //切换到重置
	clearcss();
	$('.login ').removeClass('fadeOutLeftBig bounceInRight');
	$('.register').removeClass('fadeOutLeftBig bounceInRight');
	$('.reset').removeClass('fadeOutLeftBig bounceInRight');
	$('.reset ').addClass('fadeOutLeftBig');
	setTimeout(function(){
		$('.reset ').hide();
	},300)
	$('.login').show();
	$('.login').addClass('bounceInRight');
});






// 注册页面部分
function showregs(){
	// 判断在注册页面是否让注册按钮可点击
	if($('.regst-phone input').hasClass('green') && $('.regst-mes-code-wrap input').hasClass('green') && $('.regst-email input').hasClass('green') && $('.regst-password input').hasClass('green') && $('.regst-conf-password input').hasClass('green') ){
		$('button.quick-regs').css({cursor:'pointer',opacity:'1'});
		$('button.quick-regs').removeAttr('disabled');
	}else{
		$('button.quick-regs').css({cursor:'auto',opacity:'0.65'});
		$('button.quick-regs').attr('disabled','disabled');
	}
}
showregs();

// 号码验证
var phoneflag=false;
var phonereg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
$('.regst-phone input').bind('input propertychange', function(event) {
	if($('.regst-phone input').val().match(phonereg)){
		$(this).siblings('span').css('display','none');
		$(this).siblings('span').html('');
		$(this).removeClass('red')
		$(this).addClass('green');
	}else{
		$(this).removeClass('green')
		$(this).addClass('red'); 
		if(phoneflag){
			$(this).siblings('span').css('display','block');
			$(this).siblings('span').html('请输入正确的手机号');
		}
	}
    showregs();
});
$('.regst-phone input').blur(function(event) {
	if($(this).val() == ''){
		$(this).siblings('span').css('display','block');
		$(this).siblings('span').html('请输入正确的手机号');
		$(this).removeClass('green')
	}
	if($(this).hasClass('red')){
		$(this).siblings('span').css('display','block');
		$(this).siblings('span').html('请输入正确的手机号');
		$(this).removeClass('green');
		$(this).addClass('red');
	}
	phoneflag=true;
	showregs();
});

// 短信验证码输入框
var upval=0;
var downval=0;
var timerup;
var timerdown;
var key=false;
var firstTime=0;
var lastTime=0;
var codereg=/^\d{4}$/;
var codeflag=false;
$('.regst-mes-code-wrap input').bind('input propertychange', function(event) {
		var codeval=$(this).val();
		if(codereg.test(codeval)){
			$('span.mec-code-error').css('display','none');
			$('span.mec-code-error').html('');
			$(this).removeClass('red')
			$(this).addClass('green'); 
		}else{
			if(codeflag){
				$('span.mec-code-error').css('display','block');
				$('span.mec-code-error').html('请输入合法的验证码');
			}
			$(this).removeClass('green')
			$(this).addClass('red'); 

		}
		showregs();
});

$('.regst-mes-code-wrap input').blur(function(event) {
	if($('.regst-mes-code-wrap input').val()==''){
		$('span.mec-code-error').css('display','block');
		$('span.mec-code-error').html('短信验证码必填');
		$(this).removeClass('green red');
	}
	if($('.regst-mes-code-wrap input').hasClass('red')){
		$('span.mec-code-error').css('display','block');
		$('span.mec-code-error').html('请输入合法的验证码');
	}
	$('span.arrow-up').css('display','none');
	$('span.arrow-down').css('display', 'none');
	showregs();
	codeflag=true;
});
$('.regst-mes-code-wrap input').focus(function(event) {
	$('span.arrow-up').css('display', 'inline-block');
	$('span.arrow-down').css('display', 'inline-block');
	showregs();
});

// input输入框中只能输入数字，非数字字符自动清除
$('.regst-mes-code-wrap input').keyup(function(event) {
	if($('.regst-mes-code-wrap input').val().length==1){
		$('.regst-mes-code-wrap input').val($('.regst-mes-code-wrap input').val().replace(/[^1-9]/g,''));
	}else{
		$('.regst-mes-code-wrap input').val($('.regst-mes-code-wrap input').val().replace(/\D/g,''));
	}
});
// 增加按钮

$('span.arrow-up').click(function(event) {
		if(key){
			clearInterval(timerup);
			upval = parseInt($('span.arrow-up').siblings('input').val());
			if(isNaN(upval)){
				upval=0;
			}
			upval=upval+1;
			$('span.arrow-up').siblings('input').val(upval);
			key=false;
			if(codereg.test(upval)){
				$('span.mec-code-error').css('display','none');
				$('span.mec-code-error').html('');
				$('.regst-mes-code-wrap input').removeClass('red')
				$('.regst-mes-code-wrap input').addClass('green');
				
			}else{
				$('.regst-mes-code-wrap input').removeClass('green');
				$('.regst-mes-code-wrap input').addClass('red'); 
				if (codeflag) {
					$('span.mec-code-error').css('display','block');
					$('span.mec-code-error').html('请输入合法的验证码');
				}
			}
		}
		showregs();
		return false;
});


//按住一直递增
$('span.arrow-up').mousedown(function(event) {
	firstTime=new Date();
	clearInterval(timerup);
	upval = parseInt($('span.arrow-up').siblings('input').val());
	if(isNaN(upval)){
		upval=0;
	}
	timerup=setInterval(function(){
		upval=upval+1;
		$('span.arrow-up').siblings('input').val(upval);
		if(codereg.test(upval)){
				$('span.mec-code-error').css('display','none');
				$('span.mec-code-error').html('');
				$('.regst-mes-code-wrap input').removeClass('red')
				$('.regst-mes-code-wrap input').addClass('green');
				
			}else{
				$('.regst-mes-code-wrap input').removeClass('green')
				$('.regst-mes-code-wrap input').addClass('red'); 
				if (codeflag) {
					$('span.mec-code-error').css('display','block');
					$('span.mec-code-error').html('请输入合法的验证码');
				}
			}
	},80);
	showregs();
	return false;

});
$('span.arrow-up').mouseup(function(event) {
	lastTime=new Date();
	upval = parseInt($('span.arrow-up').siblings('input').val());
	clearInterval(timerup);
	if(lastTime-firstTime<75){   //判断鼠标按了多久，用来判断是click还是mousedown
		key=true;
	}
	// console.log(lastTime-firstTime);
	showregs();
	return false;
});
// 递减按钮
$('span.arrow-down').click(function(event) {
		if(key){
			downval = parseInt($('span.arrow-down').siblings('input').val());
			if(isNaN(downval)){
				downval=0;
			}
			downval--;
			$('span.arrow-down').siblings('input').val(downval);
			key=false;
			if(codereg.test(downval)){
				$('span.mec-code-error').css('display','none');
				$('span.mec-code-error').html('');
				$('.regst-mes-code-wrap input').removeClass('red')
				$('.regst-mes-code-wrap input').addClass('green');
				
			}else{
				$('.regst-mes-code-wrap input').removeClass('green');
				$('.regst-mes-code-wrap input').addClass('red'); 
				if (codeflag) {
					$('span.mec-code-error').css('display','block');
					$('span.mec-code-error').html('请输入合法的验证码');
				}
			}
		}
		showregs();
		return false;
});

// 按住一直递减
$('span.arrow-down').mousedown(function(event) {
	firstTime=new Date();
	clearInterval(timerdown);
	downval = parseInt($('span.arrow-down').siblings('input').val());
	if(isNaN(downval)){
		downval=0;
	}
	timerdown=setInterval(function(){
		downval--;
		$('span.arrow-down').siblings('input').val(downval);
		if(codereg.test(downval)){
				$('span.mec-code-error').css('display','none');
				$('span.mec-code-error').html('');
				$('.regst-mes-code-wrap input').removeClass('red')
				$('.regst-mes-code-wrap input').addClass('green');
				
			}else{
				$('.regst-mes-code-wrap input').removeClass('green')
				$('.regst-mes-code-wrap input').addClass('red'); 
				if (codeflag) {
					$('span.mec-code-error').css('display','block');
					$('span.mec-code-error').html('请输入合法的验证码');
				}
			}
	},80)
	showregs();
	return false;
});
$('span.arrow-down').mouseup(function(event) {
	lastTime=new Date();
	downval = parseInt($('span.arrow-down').siblings('input').val());
	clearInterval(timerdown);
	if(lastTime-firstTime<75){   //判断鼠标按了多久，用来判断是click还是mousedown
		key=true;
	}
	// console.log(lastTime-firstTime);
	showregs();
});
$('span.arrow-up').hover(function() {
	$('span.arrow-up').css('display', 'inline-block');
	$('span.arrow-down').css('display', 'inline-block');
}, function() {
	$('span.arrow-up').css('display', 'none');
	$('span.arrow-down').css('display', 'none');
	if($('.regst-mes-code-wrap input').val() !='' && $('.regst-mes-code-wrap input').hasClass('red')){
		// $(document).click(function(event) {
			$('span.mec-code-error').css('display','block');
			$('span.mec-code-error').html('请输入合法的验证码');
		// });
		
	}

});

$('span.arrow-down').hover(function() {
	$('span.arrow-up').css('display', 'inline-block');
	$('span.arrow-down').css('display', 'inline-block');
}, function() {
	$('span.arrow-up').css('display', 'none');
	$('span.arrow-down').css('display', 'none');
	if($('.regst-mes-code-wrap input').val() !='' && $('.regst-mes-code-wrap input').hasClass('red')){
		// $(document).click(function(event) {
			$('span.mec-code-error').css('display','block');
			$('span.mec-code-error').html('请输入合法的验证码');
		// });
		
	}
});

$('.regst-mes-code-wrap input').hover(function() {
	$('span.arrow-up').css('display', 'inline-block');
	$('span.arrow-down').css('display', 'inline-block');
	return false;
}, function() {
	if ($('.regst-mes-code-wrap input').is(":focus")) {

	}else{
		$('span.arrow-up').css('display', 'none');
		$('span.arrow-down').css('display', 'none');
	}
	return false;
});	


// 验证邮箱
var emailflag=false;
var emreg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
$('.regst-email input').bind('input propertychange', function(event) {
	if($('.regst-email input').val().match(emreg)){
		$('span.email-error').css('display', 'none');
		$('span.email-error').html('');
		$(this).removeClass('red');
		$(this).addClass('green');
		showregs();
	}else{
		if(emailflag){
			$('span.email-error').css('display', 'block');
			$('span.email-error').html('请输入正确的邮箱');
		}
		$(this).removeClass('green')
		$(this).addClass('red'); 
	}
	if($('.regst-email input').val()==''){
		$('span.email-error').css('display', 'none');
		$('span.email-error').html('');
	}
});
$('.regst-email input').blur(function(event) {
	if($(this).val()!='' && $(this).hasClass('red')){
		$('span.email-error').css('display', 'block');
		$('span.email-error').html('请输入正确的邮箱');
	}
	emailflag=true;
});

//设置密码

$('.regst-password input').blur(function(event) {
	if($('.regst-password input').val()==''){
		$('span.password-error').css('display', 'block');
		$('span.password-error').html('密码不能为空');
		$(this).removeClass('green');
		$(this).addClass('red'); 
	}
	passflag=true;
});
$('.regst-password input').bind('input propertychange', function(event) {
	if($('.regst-password input').val().length<6 || $('.regst-password input').val().length>16){
		if(passflag){
			$('span.password-error').css('display', 'block');
			$('span.password-error').html('密码长度6-16位之间');
		}
		$(this).removeClass('green');
		$(this).addClass('red'); 
	}else{
		$('span.password-error').css('display', 'none');
		$('span.password-error').html('');
		$(this).removeClass('red');
		$(this).addClass('green');
	}
	if($(this).val() == $('.regst-conf-password input').val()){
		
		$('span.conf-password-error').css('display', 'none');
		$('span.conf-password-error').html('');
		$('.regst-conf-password input').removeClass('red');
		$('.regst-conf-password input').addClass('green');
		
	}
	showregs();
});
// 确认密码
$('.regst-conf-password input').blur(function(event) {
	if($(this).val().length>=6 && $(this).val().length<=16){
		if($(this).val() != $('.regst-password input').val()){
			$('span.conf-password-error').css('display', 'block');
			$('span.conf-password-error').html('两次输入的密码不一致');
			$(this).removeClass('green');
			$(this).addClass('red'); 
		}
	}else{
		if($(this).val()=='' && $(this).val()==$('.regst-password input').val()){

		}else{
			$('span.conf-password-error').css('display', 'block');
			$('span.conf-password-error').html('两次输入的密码不一致');
			$(this).removeClass('green');
			$(this).addClass('red'); 
		}
		
	}
	showregs();
});

$('.regst-conf-password input').bind('input propertychange', function(event) {
	showregs();
	if($(this).val().length>=6 && $(this).val().length<=16){
		if($(this).val() != $('.regst-password input').val()){
			$(this).removeClass('green');
			$(this).addClass('red'); 
		}else{
			$(this).removeClass('red');
			$(this).addClass('green');
			$('span.conf-password-error').css('display', 'none');
			$('span.conf-password-error').html('');
			
		}
	}else{
		// $('span.conf-password-error').css('display', 'block');
		// $('span.conf-password-error').html('两次输入的密码不一致');
		$(this).removeClass('green');
		$(this).addClass('red'); 
	}
	// console.log($(this).val().length);
	showregs();
});

// 发送验证码按钮
var toptimer
$('.register button.send-code').on('click',function(event) {
	if($('.regst-phone input').val()=='' ){
		if($('.regst-phone input').hasClass('red')){
			$('p.top-caution-txt').html('请输入正确的手机号');
			console.log(3)
		}else{
			$('p.top-caution-txt').html('请输入手机号');
		}
		$('.top-caution').stop().slideDown(250);
		toptimer=setTimeout(function(){
			$('.top-caution').stop().slideUp(250);
		},2500);
	}else if($('.regst-phone input').hasClass('red')){
		$('p.top-caution-txt').html('请输入正确的手机号');
		console.log(2)
		$('.top-caution').stop().slideDown(250);
		toptimer=setTimeout(function(){
			$('.top-caution').stop().slideUp(250);
		},2500);
	}else{
		
	}
});
// 悬停
$('.top-caution').hover(function() {
	clearTimeout(toptimer);
	$('.top-caution').css('display', 'block');
}, function() {
	toptimer=setTimeout(function(){
		$('.top-caution').stop().slideUp(250);
	},2500);
});
// 点击关闭
$('span.top-caution-colse').click(function(event) {
	$('.top-caution').stop().slideUp(250);
});









// 登录页面部分

// 手机号/邮箱输入框
$('.login-phmail input').bind('input propertychange', function(event) {
	if($(this).val().match(phonereg) || $(this).val().match(emreg)){
		$('.login-phmail input').removeClass('red');
		$('.login-phmail input').addClass('green');
		$('span.login-phmail-error').css('display', 'none');
		$('span.login-phmail-error').html('');
	}else{
		$('.login-phmail input').removeClass('green');
		$('.login-phmail input').addClass('red');
		if(phoneflag){
			$('span.login-phmail-error').css('display', 'block');
			$('span.login-phmail-error').html('请输入正确的手机号/邮箱');
		}
	}
	loginshow()
});
$('.login-phmail input').blur(function(event) {
	if($('.login-phmail input').val()=='' || $('.login-phmail input').hasClass('red')){
		$('span.login-phmail-error').css('display', 'block');
		$('span.login-phmail-error').html('请输入正确的手机号/邮箱');
	}
	phoneflag=true;
	loginshow()
});
// 登陆密码
var passflag=false;
$('.login-password input').bind('input propertychange', function(event) {
	if($('.login-password input').val().length<6 || $('.login-password input').val().length>16){
		$(this).removeClass('green');
		$(this).addClass('red');
		if(passflag){
			$('span.login-password-error').css('display', 'block');
			$('span.login-password-error').html('请输入正确的密码');
		}
	}else{
		$(this).removeClass('red');
		$(this).addClass('green');
		
	}
	loginshow()
});
$('.login-password input').blur(function(event) {
	if($(this).val()=='' || $(this).hasClass('red')){
		$('span.login-password-error').css('display', 'block');
		$('span.login-password-error').html('请输入正确的密码');
	}
	passflag=true;
	loginshow()
});

function loginshow(){
	if($('.login-password input').hasClass('green') && $('.login-phmail input').hasClass('green')){
		$('button.login-btn').css({cursor:'pointer',opacity:'1'});
		$('button.login-btn').removeAttr('disabled');
	}else{
		$('button.login-btn').css({cursor:'auto',opacity:'0.65'});
		$('button.login-btn').attr('disabled','disabled');
	}
}






// 重置密码页面
// 输入手机号
$('.reset-phone input').bind('input propertychange', function(event) {
	if($('.reset-phone input').val().match(phonereg)){
		$(this).siblings('span').css('display','none');
		$(this).siblings('span').html('');
		$(this).removeClass('red')
		$(this).addClass('green');
	}else{
		$(this).removeClass('green')
		$(this).addClass('red'); 
		if(phoneflag){
			$(this).siblings('span').css('display','block');
			$(this).siblings('span').html('请输入正确的手机号');
		}
	}
	resetbtnshow();
});
$('.reset-phone input').blur(function(event) {
	if($(this).val() == ''){
		$(this).siblings('span').css('display','block');
		$(this).siblings('span').html('请输入正确的手机号');
		$(this).removeClass('green')
	}
	if($(this).hasClass('red')){
		$(this).siblings('span').css('display','block');
		$(this).siblings('span').html('请输入正确的手机号');
		$(this).removeClass('green');
		$(this).addClass('red');
	}
	phoneflag=true;
	resetbtnshow();
});

// 输入短信验证码
$('.reset-mes-code-wrap input').bind('input propertychange', function(event) {
		var codeval=$(this).val();
		if(codereg.test(codeval)){
			$('span.reset-mec-code-error').css('display','none');
			$('span.reset-mec-code-error').html('');
			$(this).removeClass('red')
			$(this).addClass('green'); 
		}else{
			if(codeflag){
				$('span.reset-mec-code-error').css('display','block');
				$('span.reset-mec-code-error').html('请输入合法的验证码');
			}
			$(this).removeClass('green')
			$(this).addClass('red'); 

		}
		resetbtnshow();
});

$('.reset-mes-code-wrap input').blur(function(event) {
	if($('.reset-mes-code-wrap input').val()==''){
		$('span.reset-mec-code-error').css('display','block');
		$('span.reset-mec-code-error').html('短信验证码必填');
		$(this).removeClass('green red');
	}
	if($('.reset-mes-code-wrap input').hasClass('red')){
		$('span.reset-mec-code-error').css('display','block');
		$('span.reset-mec-code-error').html('请输入合法的验证码');
	}
	$('span.arrow-up').css('display','none');
	$('span.arrow-down').css('display', 'none');
	resetbtnshow();
	codeflag=true;
});
$('.reset-mes-code-wrap input').focus(function(event) {
	$('span.arrow-up').css('display', 'inline-block');
	$('span.arrow-down').css('display', 'inline-block');
	resetbtnshow();
});

// input输入框中只能输入数字，非数字字符自动清除
$('.reset-mes-code-wrap input').keyup(function(event) {
	if($('.reset-mes-code-wrap input').val().length==1){
		$('.reset-mes-code-wrap input').val($('.reset-mes-code-wrap input').val().replace(/[^1-9]/g,''));
	}else{
		$('.reset-mes-code-wrap input').val($('.reset-mes-code-wrap input').val().replace(/\D/g,''));
	}
});

// 增加按钮
var upval2=0;
var downval2=0;
$('span.arrow-up').click(function(event) {
		if(key){
			clearInterval(timerup);
			upval2 = parseInt($('.reset-mes-code-wrap input').val());
			if(isNaN(upval2)){
				upval2=0;
			}
			upval2=upval2+1;
			$('.reset-mes-code-wrap input').val(upval2);
			key=false;
			if(codereg.test(upval2)){
				$('span.reset-mec-code-error').css('display','none');
				$('span.reset-mec-code-error').html('');
				$('.reset-mes-code-wrap input').removeClass('red')
				$('.reset-mes-code-wrap input').addClass('green');
				
			}else{
				$('.reset-mes-code-wrap input').removeClass('green');
				$('.reset-mes-code-wrap input').addClass('red'); 
				if (codeflag) {
					$('span.reset-mec-code-error').css('display','block');
					$('span.reset-mec-code-error').html('请输入合法的验证码');
				}
			}
		}
		resetbtnshow();
		return false;
});


//按住一直递增
$('span.reup').mousedown(function(event) {
	firstTime=new Date();
	clearInterval(timerup);
	upval2 = parseInt($('.reset-mes-code-wrap input').val());
	if(isNaN(upval2)){
		upval2=0;
	}
	timerup=setInterval(function(){
		upval2=upval2+1;
		$('.reset-mes-code-wrap input').val(upval2);
		if(codereg.test(upval2)){
				$('span.reset-mec-code-error').css('display','none');
				$('span.reset-mec-code-error').html('');
				$('.reset-mes-code-wrap input').removeClass('red')
				$('.reset-mes-code-wrap input').addClass('green');
				
			}else{
				$('.reset-mes-code-wrap input').removeClass('green')
				$('.reset-mes-code-wrap input').addClass('red'); 
				if (codeflag) {
					$('span.reset-mec-code-error').css('display','block');
					$('span.reset-mec-code-error').html('请输入合法的验证码');
				}
			}
	},80);
	resetbtnshow();
	return false;

});
$('span.reup').mouseup(function(event) {
	lastTime=new Date();
	upval2 = parseInt($('.reset-mes-code-wrap input').val());
	clearInterval(timerup);
	if(lastTime-firstTime<75){   //判断鼠标按了多久，用来判断是click还是mousedown
		key=true;
	}
	// console.log(lastTime-firstTime);
	resetbtnshow();
	return false;
});
// 递减按钮
$('span.redown').click(function(event) {
		if(key){
			downval2 = parseInt($('.reset-mes-code-wrap input').val());
			if(isNaN(downval2)){
				downval2=0;
			}
			downval2--;
			$('.reset-mes-code-wrap input').val(downval2);
			key=false;
			if(codereg.test(downval2)){
				$('span.reset-mec-code-error').css('display','none');
				$('span.reset-mec-code-error').html('');
				$('.reset-mes-code-wrap input').removeClass('red')
				$('.reset-mes-code-wrap input').addClass('green');
				
			}else{
				$('.reset-mes-code-wrap input').removeClass('green');
				$('.reset-mes-code-wrap input').addClass('red'); 
				if (codeflag) {
					$('span.reset-mec-code-error').css('display','block');
					$('span.reset-mec-code-error').html('请输入合法的验证码');
				}
			}
		}
		resetbtnshow();
		return false;
});

// 按住一直递减
$('span.redown').mousedown(function(event) {
	firstTime=new Date();
	clearInterval(timerdown);
	downval2 = parseInt($('.reset-mes-code-wrap input').val());
	if(isNaN(downval2)){
		downval2=0;
	}
	timerdown=setInterval(function(){
		downval2--;
		$('.reset-mes-code-wrap input').val(downval2);
		if(codereg.test(downval2)){
				$('span.reset-mec-code-error').css('display','none');
				$('span.reset-mec-code-error').html('');
				$('.reset-mes-code-wrap input').removeClass('red')
				$('.reset-mes-code-wrap input').addClass('green');
				
			}else{
				$('.reset-mes-code-wrap input').removeClass('green')
				$('.reset-mes-code-wrap input').addClass('red'); 
				if (codeflag) {
					$('span.reset-mec-code-error').css('display','block');
					$('span.reset-mec-code-error').html('请输入合法的验证码');
				}
			}
	},80)
	resetbtnshow();
	return false;
});
$('span.redown').mouseup(function(event) {
	lastTime=new Date();
	downval2 = parseInt($('.reset-mes-code-wrap input').val());
	clearInterval(timerdown);
	if(lastTime-firstTime<75){   //判断鼠标按了多久，用来判断是click还是mousedown
		key=true;
	}
	// console.log(lastTime-firstTime);
	resetbtnshow();
});
$('span.reup').hover(function() {
	$('span.reup').css('display', 'inline-block');
	$('span.redown').css('display', 'inline-block');
}, function() {
	$('span.reup').css('display', 'none');
	$('span.redown').css('display', 'none');
	if($('.reset-mes-code-wrap input').val() !='' && $('.reset-mes-code-wrap input').hasClass('red')){
		// $(document).click(function(event) {
			$('span.reset-mec-code-error').css('display','block');
			$('span.reset-mec-code-error').html('请输入合法的验证码');
		// });
		
	}

});

$('span.redown').hover(function() {
	$('span.reup').css('display', 'inline-block');
	$('span.redown').css('display', 'inline-block');
}, function() {
	$('span.reup').css('display', 'none');
	$('span.redown').css('display', 'none');
	if($('.reset-mes-code-wrap input').val() !='' && $('.reset-mes-code-wrap input').hasClass('red')){
		// $(document).click(function(event) {
			$('span.reset-mec-code-error').css('display','block');
			$('span.reset-mec-code-error').html('请输入合法的验证码');
		// });
		
	}
});

$('.reset-mes-code-wrap input').hover(function() {
	$('span.reup').css('display', 'inline-block');
	$('span.redown').css('display', 'inline-block');
	return false;
}, function() {
	if ($('.reset-mes-code-wrap input').is(":focus")) {

	}else{
		$('span.reup').css('display', 'none');
		$('span.redown').css('display', 'none');
	}
	resetbtnshow()
	return false;
});	

// 发送验证码按钮
var toptimerreset
$('.reset button.send-code').on('click',function(event) {
	if($('.reset-phone input').val()=='' ){
		if($('.reset-phone input').hasClass('red')){
			$('p.top-caution-txt').html('请输入正确的手机号');
		}else{
			$('p.top-caution-txt').html('请输入手机号');
		}
		$('.top-caution').stop().slideDown(250);
		toptimerreset=setTimeout(function(){
			$('.top-caution').stop().slideUp(250);
		},2500);
	}else if($('.reset-phone input').hasClass('red')){
		$('p.top-caution-txt').html('请输入正确的手机号');
		$('.top-caution').stop().slideDown(250);
		toptimerreset=setTimeout(function(){
			$('.top-caution').stop().slideUp(250);
		},2500);
	}else{

	}
	
});
// 悬停
$('.top-caution').hover(function() {
	clearTimeout(toptimerreset);
	$('.top-caution').css('display', 'block');
}, function() {
	toptimerreset=setTimeout(function(){
		$('.top-caution').stop().slideUp(250);
	},2500);
});
// 点击关闭
$('span.top-caution-colse').click(function(event) {
	$('.top-caution').stop().slideUp(250);
});



//输入新密码
$('.reset-password input').blur(function(event) {
	if($('.reset-password input').val()==''){
		$('span.reset-password-error').css('display', 'block');
		$('span.reset-password-error').html('新密码不能为空');
		$(this).removeClass('green');
		$(this).addClass('red'); 
	}
	passflag=true;
	resetbtnshow()
});
$('.reset-password input').bind('input propertychange', function(event) {
	if($('.reset-password input').val().length<6 || $('.reset-password input').val().length>16){
		if(passflag){
			$('span.reset-password-error').css('display', 'block');
			$('span.reset-password-error').html('新密码长度6-16位之间');
		}
		$(this).removeClass('green');
		$(this).addClass('red'); 
	}else{
		$('span.reset-password-error').css('display', 'none');
		$('span.reset-password-error').html('');
		$(this).removeClass('red');
		$(this).addClass('green');
	}
	if($(this).val() == $('.reset-conf-password input').val()){
		
		$('span.reset-conf-password-error').css('display', 'none');
		$('span.reset-conf-password-error').html('');
		$('.reset-conf-password input').removeClass('red');
		$('.reset-conf-password input').addClass('green');
		
	}
	resetbtnshow();
});
// 确认新密码
$('.reset-conf-password input').blur(function(event) {
	if($(this).val().length>=6 && $(this).val().length<=16){
		if($(this).val() != $('.reset-password input').val()){
			$('span.reset-conf-password-error').css('display', 'block');
			$('span.reset-conf-password-error').html('两次输入的密码不一致');
			$(this).removeClass('green');
			$(this).addClass('red'); 
		}
	}else{
		if($(this).val()=='' && $(this).val()==$('.reset-password input').val()){

		}else{
			$('span.reset-conf-password-error').css('display', 'block');
			$('span.reset-conf-password-error').html('两次输入的密码不一致');
			$(this).removeClass('green');
			$(this).addClass('red'); 
		}
		
	}
	resetbtnshow();
});

$('.reset-conf-password input').bind('input propertychange', function(event) {
	showregs();
	if($(this).val().length>=6 && $(this).val().length<=16){
		if($(this).val() != $('.reset-password input').val()){
			$(this).removeClass('green');
			$(this).addClass('red'); 
		}else{
			$(this).removeClass('red');
			$(this).addClass('green');
			$('span.reset-conf-password-error').css('display', 'none');
			$('span.reset-conf-password-error').html('');
			
		}
	}else{
		// $('span.reset-conf-password-error').css('display', 'block');
		// $('span.reset-conf-password-error').html('两次输入的密码不一致');
		$(this).removeClass('green');
		$(this).addClass('red'); 
	}
	// console.log($(this).val().length);
	resetbtnshow();
});


function resetbtnshow(){
	if($('.reset-conf-password input').hasClass('green') && $('.reset-password input').hasClass('green') && $('.reset-mes-code-wrap input').hasClass('green') && $('.reset-mes-code-wrap input').hasClass('green')){
		$('button.reset-password-btn').css({cursor:'pointer',opacity:'1'});
		$('button.reset-password-btn').removeAttr('disabled');
	}else{
		$('button.reset-password-btn').css({cursor:'auto',opacity:'0.65'});
		$('button.reset-password-btn').attr('disabled','disabled');
	}
}









