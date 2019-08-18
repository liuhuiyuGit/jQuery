$(function(){
    //鼠标放到十二张图上的时候图片放大效果
    //选择标签
    var $tu=$('.banner>div>a');   //每个a标签
    var $banner=$('.banner');     //最大父盒子
    var $span = $('.banner span'); //a标签里的span
    
    //最大的父盒子鼠标离开后设置透明度为0
    $banner.mouseout(function(){
        $span.stop().animate({
            opacity:0
        });
    });


    //每个a标签鼠标进入后
    $tu.mouseover(function(){
        //a标签的宽高设大达到放大效果
        $(this).stop().animate({
            width:'110%',
            height:'110%'
        },400);
        //a标签的父元素出去自己本身之外在子元素span设置透明度为.4
        $(this).parent().siblings().find('span').stop().animate({
            opacity:.4
        },300);
        //a标签的子元素span动画设置为0
        $(this).children().stop().animate({
            opacity:0
        },400)
    })
    //鼠标离开a标签之后
    $tu.mouseout(function(){
        //a标签的宽高设为原样
        $(this).stop().animate({
            width:'102%',
            height:'100%'
        },200);
    })
  




//获取元素
var $a = $('.dhl a');//右上角导航栏
var $lan=$('.qwe');//蓝色条
var $h1=$('h1');//h1hdfskl
var $title=$('.title');//蓝色条h1父元素
    //设置导航栏的margin值控制从右向左移动并设置透明鬼
    $a.animate({
        marginRight:20,
        opacity:1
    },800);
    //设置蓝色条的宽度从0到150 margin值从有到无 透明度从无到有
    $lan.animate({
        opacity:1,
        width:150,
        marginLeft:0
    },1200);
    //设置h1的margin值从有到无  透明度从无到有
    $h1.animate({
        marginLeft:0,
        opacity:1
    },1200)




    $a.each(function(i,ele){
        $(this).mouseover(function(){
            $(this).stop().animate({
                fontSize:23,
                marginLeft:15
            },200);
            $(this).addClass('yin');
        })
        $(this).mouseout(function(){
            $(this).stop().animate({
                fontSize:16,
                marginLeft:0
            },100);
            $(this).removeClass('yin');
        })
    })



})