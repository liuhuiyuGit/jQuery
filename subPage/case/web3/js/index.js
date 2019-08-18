$(function(){

//圆圈
var $yuan=$('.yuan');  //最大的圆
// var $h2=$('.yuan h2');
// var $h4=$('.yuan h4');
// var $p=$('.yuan p');
var $nei=$('.qw');   //内容
// var $guan=$('.guan'); 
var $div=$('.yuan div'); //所有的圆


    $yuan.animate({
        width:510,
        height:510
    },700);

    $div.animate({
        width:548,
        height:548,
        opacity:1
    },2000);

    $nei.animate({
        opacity:1
    },2000)

















    //获取元素
    var $a = $('.dhl a');//右上角导航栏
    var $lan=$('.qwe');//蓝色条
    var $h1=$('h1');//h1hdfskl
    // var $title=$('.title');//蓝色条h1父元素
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
                },100);
                $(this).addClass('yin')
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