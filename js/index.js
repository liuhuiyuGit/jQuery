window.onload = function() {

    //动画函数

    var timeid;

    function animate1(element, attr, target) {
        clearInterval(timeid);



        var pos = window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currentStyle[attr];

        var pos1 = 100 * pos;

        timeid = setInterval(function() {

            var step = (target * 100 - pos1) / 10;

            pos1 += step > 0 ? Math.ceil(step) : Math.floor(step);
            element.style[attr] = pos1 / 100;


            if (pos1 == target * 100) {

                clearInterval(timeid);
            }

        }, 50)


    }




    var big = document.getElementById("banner1");
    var picul = document.getElementById("picsd");

    var pics = picul.getElementsByTagName("li");
    var ul2 = document.getElementById("vectorid");
    var uli = document.getElementById("circleid");


    var lis = uli.getElementsByTagName("li");
    var list = ul2.children;
    var left = list[0];

    var right = list[1];
    var index = 0;
    var timer;




    //当鼠标经过时绑定定时器
    big.onmouseout = function() {
        timer = setInterval(function() {
            right.onclick();


        }, 5000);





    }
    big.onmouseout();

    //清理定时器

    big.onmouseover = function() {


        clearInterval(timer);
    }



    //原点


    var index1 = 0;
    for (var i = 0; i < lis.length; i++) {
        lis[i].setAttribute("index", i);
        lis[i].onclick = function() {


            for (var i = 0; i < lis.length; i++) {
                pics[i].style.display = "none";
                pics[i].style.opacity = 0;

                lis[i].style.backgroundColor = "#fff";
            }
            this.style.backgroundColor = "#00f0ff";

            index1 = this.getAttribute("index");
            pics[index1].style.display = "block";
            animate1(pics[index1], "opacity", 1);




        }


    }



    right.onclick = function() {

        for (var i = 0; i < pics.length; i++) {

            pics[i].style.display = "none";
            pics[i].style.opacity = 0;

            lis[i].style.backgroundColor = "#fff";



        }
        index++;

        if (index > pics.length - 1) {

            index = 0;
        }
        pics[index].style.display = 'block';
        animate1(pics[index], "opacity", 1);


        lis[index].style.backgroundColor = "#00f0ff";



    }

    left.onclick = function() {

        for (var i = 0; i < pics.length; i++) {

            pics[i].style.display = "none";
            pics[i].style.opacity = 0;
            lis[i].style.backgroundColor = "#fff";



        }
        index--;

        if (index < 0) {

            index = pics.length - 1;
        }
        pics[index].style.display = 'block';
        animate1(pics[index], "opacity", 1);


        lis[index].style.backgroundColor = "#00f0ff";



    }





    var screen1=document.documentElement.clientWidth;

    // 右上角导航
    $(".nav").animate({
        right: screen1*250/1920,
        opacity: 1
    }, 500)



    // $("#botul").mouseover(function() {


    //     $(this).children("li").stop().animate({
    //         opacity: 0.6,


    //     })

    // })




    $("#botul").mouseout(function() {


        $(this).children("li").stop().animate({
            opacity: 1,



        })




    })
        
    $("#botul>li").each(function(i, e) {
        $(e).mouseover(function() {
            $(e).stop().animate({
                opacity: 1,
            })

            $(e).siblings("li").stop().animate({

                opacity: 0.6,

            })



        })
    })






}