$(function() {


    //圆圈
var $yuan=$('.yuan');  //最大的圆
// var $h2=$('.yuan h2');
// var $h4=$('.yuan h4');
var $p=$('.yuan p');
var $nei=$('.qw');   //内容
// var $guan=$('.guan'); 
var $div=$('.yuan div'); //所有的圆

$p.animate({
    fontSize:14
},270);
    $div.animate({
        // width:548,
        // height:548,
        opacity:1
    },1000);

    $div.addClass('zi');
    $yuan.addClass('yuan1');
    $nei.animate({
        opacity:1
    },1000);


    //获取元素
    var $a = $('.dhl a')
    var $lan = $('.qwe'); //蓝色条
    var $h1 = $('h1'); //h1
    var $title = $('.title')
    $a.animate({
        marginRight: 20,
        opacity: 1
    }, 800);
    $lan.animate({
        opacity: 1,
        width: 150,
        marginLeft: 0
    }, 1200);
    $h1.animate({
        marginLeft: 0,
        opacity: 1
    }, 1200);
    $title.fadeIn(1500);

    



        $a.each(function(i,ele){
            $(this).mouseover(function(){
                $(this).stop().animate({
                    fontSize:23,
                    marginLeft:15
                },100);
            })
            $(this).mouseout(function(){
                $(this).stop().animate({
                    fontSize:16,
                    marginLeft:0
                },100);
            })
        })




    })


















