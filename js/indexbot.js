$(function() {












    // 带字的圆
    var wci = $(".wcircle");
    var wci1 = wci.children("div").eq(0);
    var wci2 = wci.children("div").eq(1);
    var wci3 = wci.children("div").eq(2);
    var wci4 = wci.children("div").eq(3);
    var wci5 = wci.children("div").eq(4);
    var wci6 = wci.children("div").eq(5);
    var wci7 = wci.children("div").eq(6);


    $(window).scroll(function() {


        var keshigao = document.documentElement.clientHeight;

        var picbot = document.getElementById("picbot")
        var zitop = picbot.getBoundingClientRect().top;
        zitop = zitop + picbot.offsetHeight * 8 / 10;
        var screen = $(".great").width();

        console.log(screen);
        if (keshigao >= zitop) {






            wci.children().animate({

                fontSize: screen * 23 / 1920,
                lineHeight: screen * 35 / 1920,
            }, 1000)

            wci.on("mouseover", "div", function() {
                var that = $(this)
                $(this).stop().animate({

                    fontSize: screen * 27 / 1920,
                    lineHeight: screen * 40 / 1920,
                    fontWeight: 700,
                }, 500, function() {

                    that.stop().animate({

                        fontWeight: 400,
                    })
                })
            })

            wci.on("mouseout", "div", function() {
                var that = $(this)
                $(this).stop().animate({

                    fontSize: screen * 23 / 1920,
                    lineHeight: screen * 35 / 1920,

                }, 500)
            })




            wci1.animate({

                width: screen / 10,
                height: screen / 10,
                opacity: 0.8

            }, 1200)


            wci1.on("mouseover", function() {
                $(this).stop().animate({

                    width: screen * 192 * 12 / 19200,
                    height: screen * 192 * 12 / 19200,

                }, 500)


            })
            wci1.on("mouseout", function() {
                $(this).stop().animate({

                    width: screen * 192 / 1920,
                    height: screen * 192 / 1920,

                }, 500)


            })


            wci2.animate({

                width: screen * 235 / 1920,
                height: screen * 235 / 1920,
                opacity: 0.8
            }, 1300)
            wci2.on("mouseover", function() {
                $(this).stop().animate({

                    width: screen * 235 * 12 / 19200,
                    height: screen * 235 * 12 / 19200,

                }, 500)


            })
            wci2.on("mouseout", function() {
                $(this).stop().animate({

                    width: screen * 235 / 1920,
                    height: screen * 235 / 1920,

                }, 500)


            })

            wci3.animate({

                width: screen * 145 / 1920,
                height: screen * 145 / 1920,
                opacity: 0.8
            }, 1000)
            wci3.on("mouseover", function() {
                $(this).stop().animate({

                    width: screen * 145 * 12 / 19200,
                    height: screen * 145 * 12 / 19200,

                }, 500)


            })
            wci3.on("mouseout", function() {
                $(this).stop().animate({

                    width: screen * 145 / 1920,
                    height: screen * 145 / 1920,

                }, 500)


            })
            wci4.animate({

                width: screen * 214 / 1920,
                height: screen * 214 / 1920,
                opacity: 0.8
            }, 1250)
            wci4.on("mouseover", function() {
                $(this).stop().animate({

                    width: screen * 214 * 12 / 19200,
                    height: screen * 214 * 12 / 19200,

                }, 500)


            })
            wci4.on("mouseout", function() {
                $(this).stop().animate({

                    width: screen * 214 / 1920,
                    height: screen * 214 / 1920,

                }, 500)


            })
            wci5.animate({

                width: screen * 128 / 1920,
                height: screen * 128 / 1920,
                opacity: 0.8
            }, 800)
            wci5.on("mouseover", function() {
                $(this).stop().animate({

                    width: screen * 128 * 12 / 19200,
                    height: screen * 128 * 12 / 19200,

                }, 500)


            })
            wci5.on("mouseout", function() {
                $(this).stop().animate({

                    width: screen * 128 / 1920,
                    height: screen * 128 / 1920,

                }, 500)


            })
            wci6.animate({

                width: screen * 165 / 1920,
                height: screen * 165 / 1920,
                opacity: 0.8
            }, 1000)
            wci6.on("mouseover", function() {
                $(this).stop().animate({

                    width: screen * 165 * 12 / 19200,
                    height: screen * 165 * 12 / 19200,

                }, 500)


            })
            wci6.on("mouseout", function() {
                $(this).stop().animate({

                    width: screen * 165 / 1920,
                    height: screen * 165 / 1920,

                }, 500)


            })
            wci7.animate({

                width: screen * 86 / 1920,
                height: screen * 86 / 1920,
                opacity: 0.8
            }, 700)


            wci7.on("mouseover", function() {
                $(this).stop().animate({

                    width: screen * 86 * 12 / 19200,
                    height: screen * 86 * 12 / 19200,

                }, 500)


            })
            wci7.on("mouseout", function() {
                $(this).stop().animate({

                    width: screen * 86 / 1920,
                    height: screen * 86 / 1920,

                }, 500)


            })





























        }





        // 圆圈动画


        // 获取元素

        var imgpic = $(".opcircle>img");

        // 获取屏幕可视区域高度：






        var timer = setTimeout(function() {




            imgpic.eq(0).animate({
                left: 0 * screen / 1920,
                width: 530 * screen / 1920,
                height: 530 * screen / 1920,
                opacity: 1

            }, 700)
            imgpic.eq(1).animate({
                left: -20 * screen / 1920,
                top: 10 * screen / 1920,
                width: 570 * screen / 1920,
                height: 570 * screen / 1920,
                opacity: 1

            }, 800)
            imgpic.eq(2).animate({
                left: -40 * screen / 1920,
                top: -15 * screen / 1920,
                width: 590 * screen / 1920,
                height: 590 * screen / 1920,
                opacity: 1

            }, 900)









        }, 1000, function() {

            clearTimeout(timer);

        })



    })











})