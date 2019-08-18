$(function() {
    // 上方列表样式
    var $lieBiao = $('#lieBiao');
    // 下面logo样式
    var $ziMu = $('#ziMu')
    var $logo = $ziMu.children('.mu')
    var $xian = $ziMu.children('.xian')
        // 文档部分日期
    var $date = $('.date')
    $lieBiao.animate({
        right: '400px',
        opacity: 1,
    }, 1000);

    $logo.animate({
        left: '375px',
        opacity: 1,
    }, 1000);
    $xian.animate({
        width: '150px',
        left: '375px',
        right: '375px',
        opacity: 1,
    }, 1500)
    $date.mouseover(function() {
        $(this).stop().animate({
            left: '-50px',
        }, 500)
    })
    $date.mouseout(function() {
        $(this).stop().animate({
            left: '0px',
        }, 500)
    })
});
$(function() {
    var $xuHao = $('.xuHao')
    $xuHao.mouseover(function() {
        $(this).animate({
            right: '250px',
        }, 1500)
    })

})