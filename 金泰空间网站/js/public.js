$(function(){
var screenW=1200;
////滚动页面，子页面的tab的固定
$(window).scroll(function(event){
	setFiexd()
});
/*mobile-bar*/  
$('.nav-trigger').click(function() {
	 $('.cd-morph-dropdown').toggleClass('nav-open')
	 $('.morph-dropdown-wrapper').slideToggle()
});
//初始化的动画效果
$('.aniview').AniView(); 
layui.use(['element','carousel','form','laydate'], function(){	
  var element = layui.element;
  	  form = layui.form,
  	  laydate = layui.laydate;//日期时间选择器
  	  laydate.render({
	    elem: '#visvitDate'
	  });
	  laydate.render({
	    elem: '#visvitDateM'
	  });
  //监听Tab切换，以改变地址hash值
  element.on('tab(tabFixed)', function(){
 	var layId=this.getAttribute('lay-id');
 	var index=$(this).index();
   	if(index!==0){
   		$('.tab-fixed').css({
			"position":"fixed",
			"top":0,
			'width':screenW +"px"
		});
   	}else{
   		var bannerH=$("#header_banner").height()+70;//头部
   		$('.tab-fixed').css({
			"position":"fixed",
			"top":0,
			'width':screenW +"px"
		});
   		$(window).scrollTop(bannerH)
   	}
	location.hash = layId;
  });
  form.verify({
	  buildName: function(value, item){ //value：表单的值、item：表单的DOM对象
	  	console.log(value,"ooo")
	    if(!value){
	      return '请选择大厦';
	    }
	  },
	  visvitDate:function(value, item){ //value：表单的值、item：表单的DOM对象
	    if(!value){
	      return '请选择预约时间';
	    }
	  },
	  name:function(value, item){ //value：表单的值、item：表单的DOM对象
	    if(!value){
	      return '请输入姓名';
	    }
	  }
	});      
    
	form.on('submit(formOrder)', function(data){
	    layer.msg(JSON.stringify(data.field));
	    return false;
    });
/*	layer.config({
	  skin: 'mobile-leyer'
	});*/
    $("#mobile-btn").on("click",function(){
    	$(".mark").show();
    	$('#mobile-form-wrap').show();
    	$('.wrap').hide()
    })
    //关闭移动预约框
			$("#mobile-form-wrap .btn-close").on("click",function(){
				$(".mark").hide();
				$('#mobile-form-wrap').hide();
				$('.wrap').show()
			})
  });
  	  //监听提交
  function setFiexd(){

  	var top=$(window).scrollTop();
	var bannerH=$("#header_banner").height()+70;//头部
	 screenW=document.body.clientWidth;
	var footerTop = $(".footer").offset().top;
	//console.log(parseInt(footerTop-top))
	if(screenW>=1200){//适配浏览器的宽度，保证tab的居中位置；
		screenW=1200
	}
	$('.tab-fixed').css("position","relative");
	//&& parseInt(footerTop-top)>=100
	if( top>bannerH){
		$('.tab-fixed').css({
			"position":"fixed",
			"top":0,
			'width':screenW +"px"
		});
		console.log("k0")
		//$(".cont-wrap>div").css("paddingTop","100px")
	}
  }

  







})
  