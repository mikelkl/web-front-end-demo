/**
 * Created by kanglong.lkl on 2016/9/13.
 */
var common = {
    init: function () {
        this.lessImgShow();
    },
    stopEventBubble: function (event) {
        var e = event;
        if (e) {
            e.stopPropagation();
        }
    },
    lessImgShow: function () {
        $(".lessonimgbox").bind("mouseover", function (e) {
            var _pop = $(this).find(".image-pop");
            $(this).css({border: "2px solid #1abc9c", width: "226px", height: "226px"});
            TweenMax.to(_pop, 0.5, {top: 0, ease: Bounce.easeOut});
            common.stopEventBubble(e);
        });

        $(document).bind("mouseover", function () {
            $(".lessonimgbox").css({border: "0", width: "230px", height: "230px"});
            var _pop = $(this).find(".image-pop");
            TweenMax.to(_pop, 0.5, {top: 230, ease: Linear.easeNone});
        })

    },

}

$(function () {
    common.init();
})