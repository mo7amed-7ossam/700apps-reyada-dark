$(document).ready(function () {
    // حساب حجم و ابعاد الشاشه نسبة الى الصوره المرجعيه
    function calculateScreenSize() {
        var $img = $(".screen-size img");
        var $screenSize = $img.parent();

        var screenSizeWidth = $screenSize.width();
        var screenSizeHeight = $screenSize.height();

        var naturalWidth = $img[0].naturalWidth;
        var naturalHeight = $img[0].naturalHeight;

        // حساب النسبة
        var widthRatio = screenSizeWidth / naturalWidth;
        var heightRatio = screenSizeHeight / naturalHeight;
        var scale = Math.min(widthRatio, heightRatio);

        // العرض والارتفاع بعد التحجيم
        var fittedWidth = naturalWidth * scale;
        var fittedHeight = naturalHeight * scale;



        $(".screen").css({ "width": fittedWidth + 'px', "height": fittedHeight + 'px' })
        $(".num").css({ "width": (fittedWidth * (46.63 / 1080)) + 'px ', "padding": "0px" })

        // حساب حجم الخط بناءً على أصغر بُعد
        var minDimension = Math.min(fittedWidth, fittedHeight);
        var standardSize = minDimension;

        $("body").css({ "font-size": (standardSize * .033) + 'px', "line-height": (standardSize * .05) + 'px' });
        // $(".hero .hero-title").css();



    }

    // أول مرة لما الصفحة تتحمل
    calculateScreenSize();

    // لما يحصل تغيير في حجم الشاشة
    $(window).on('resize', function () {
        calculateScreenSize();
    });
})