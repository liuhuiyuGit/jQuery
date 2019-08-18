   
$(function(){
    // <!-- 整个导航栏运作的过程 -->
    // <!-- 包括logo运动的过程 --> 
    var $lis = $('.lis');
    var $title = $('.title')
    var $header = $('#header');
    var $bar = $('.bar')
    $header.mouseover(function () {
        $title.animate({
            left: '300px',
            opacity: 1,
        }, 1500)
        $lis.animate({
            left: 900,
            opacity: 1,
        }, 1500)
        $bar.animate({
            left: 300,
            opacity: 1,
            width: 140,
        }, 1500)
    })
    // <!-- 第二部分营销网站点的过程里面的文本与图片移动过程中的js -->
    var $ser_1 = $('#ser_1');
    var $tet_1 = $('#tet_1');
    var $img_1 = $('#img_1');
    $ser_1.mousemove(function () {
        $tet_1.animate({
            left: '1000px',
            opacity: 1,

        }, 1500)
        $img_1.animate({
            left: '100px',
            opacity: 1,

        }, 1500)
    })
      // 事件源是针对第三块的大盒子做鼠标移入事件
        //    事件功能: 图像跟内容进行同事移动
        var $ser2 = $('#ser2');
        var $tet2 = $('#tet2');
        var $img2 = $('#img2');
        $ser2.mousemove(function () {
            $tet2.animate({
                left: 100,
                opacity: 1,

            }, 1500)
            $img2.animate({
                left: '1000px',
                opacity: 1,

            }, 1500)
        })
        //事件源是针对第四块的大盒子做鼠标移入事件
        //    事件功能: 图像跟内容进行同事移动
        var $ser_4 = $('#ser_4');
        var $tet_4 = $('#tet_4');
        var $img_4 = $('#img_4');
        $ser_4.mouseover(function () {
            $tet_4.animate({
                left: '1000px',
                opacity: 1,

            }, 1500)
            $img_4.animate({
                left: '100px',
                opacity: 1,

            }, 1500)
        })
             //事件源是针对第五块的大盒子做鼠标移入事件
        //    事件功能: 内容进行同事移动
        var $ser_6 = $('#ser_6');
        var $tet_6 = $('#tet_6');
        $ser_6.mousemove(function () {
            $tet_6.animate({
                left: '100px',
                opacity: 1,

            }, 1000)
        })
             //事件源是针对第六块的大盒子做鼠标移入事件
        //    事件功能: 图像跟内容进行同事移动
        var $ser_5 = $('#ser_5');
        var $tet_5 = $('#tet_5');
        var $img_5 = $('#img_5');
        $ser_5.mouseover(function () {
            $tet_5.animate({
                left: '1000px',
                opacity: 1,

            }, 1500)
            $img_5.animate({
                left: '100px',
                opacity: 1,

            }, 1500)
        })
             //事件源是针对第七块的大盒子做鼠标移入事件
        //    事件功能: 图像跟内容进行同事移动
        $ser_7 = $('.service7');
        $list = $('.list');
        $c1 = $('.c1');
        $c2 = $('.c2');
        $c3 = $('.c3');
        $c4 = $('.c4')
        $ser_7.mouseover(function () {
            // list做一个从左向右的平移,透明度由浅及深
            $list.animate({
                left: 100,
                opacity: 1,
            }, 2000)
            // 针c1在原基础上进行css基础样式的放大小效果
            $c1.css({
                'transform': 'scale(0.9) ',
            })
            // 针c2在原基础上进行css基础样式的放大小效果
            $c2.css({
                'transform': 'scale(1.2) ',
            })
            // 针c4在原基础上进行css基础样式的放大小效果
            $c4.css({
                'transform': 'scale(1) ',
            })
            // 针c3在原基础上进行css基础样式的放大小效果
            $c3.css({
                'transform': 'scale(1) ',
            })

        })
})





