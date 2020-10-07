var num = 80; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('#header').addClass('sticky');
    } else {
        $('#header').removeClass('sticky');
    }
    if ($(window).scrollTop() > num) {
        $('.navbar-collapse').addClass('fix');
    } else {
        $('.navbar-collapse').removeClass('fix');
    }
});

$(".clm1").hover(function () {
    $(".clm1").css({
        backgroundColor: '#f6effe'
    })
}, function () {
    $(".clm1").css({
        backgroundColor: 'transparent'
    })
});

$(".clm2").hover(function () {
    $(".clm2").css({
        backgroundColor: '#f6effe'
    })
}, function () {
    $(".clm2").css({
        backgroundColor: 'transparent'
    })
});
$(".clm3").hover(function () {
    $(".clm3").css({
        backgroundColor: '#f6effe'
    })
}, function () {
    $(".clm3").css({
        backgroundColor: 'transparent'
    })
});
$(".clm4").hover(function () {
    $(".clm4").css({
        backgroundColor: '#f6effe'
    })
}, function () {
    $(".clm4").css({
        backgroundColor: 'transparent'
    })
});
$(".clm5").hover(function () {
    $(".clm5").css({
        backgroundColor: '#f6effe'
    })
}, function () {
    $(".clm5").css({
        backgroundColor: 'transparent'
    })
});
$(".clm6").hover(function () {
    $(".clm6").css({
        backgroundColor: '#f6effe'
    })
}, function () {
    $(".clm6").css({
        backgroundColor: 'transparent'
    })
});
$(".clm1").hover(function () {
    $(".clm1").css({
        backgroundColor: '#f6effe'
    })
}, function () {
    $(".clm1").css({
        backgroundColor: 'transparent'
    })
});
$(".clm7").hover(function () {
    $(".clm7").css({
        backgroundColor: '#f6effe'
    })
}, function () {
    $(".clm7").css({
        backgroundColor: 'transparent'
    })
});
$(".clm8").hover(function () {
    $(".clm8").css({
        backgroundColor: '#f6effe'
    })
}, function () {
    $(".clm8").css({
        backgroundColor: 'transparent'
    })
});
$(".clm9").hover(function () {
    $(".clm9").css({
        backgroundColor: '#f6effe'
    })
}, function () {
    $(".clm9").css({
        backgroundColor: 'transparent'
    })
});
$(".clm10").hover(function () {
    $(".clm10").css({
        backgroundColor: '#f6effe'
    })
}, function () {
    $(".clm10").css({
        backgroundColor: 'transparent'
    })
});
$(".clm11").hover(function () {
    $(".clm11").css({
        backgroundColor: '#f6effe'
    })
}, function () {
    $(".clm11").css({
        backgroundColor: 'transparent'
    })
});
$(".clm12").hover(function () {
    $(".clm12").css({
        backgroundColor: '#f6effe'
    })
}, function () {
    $(".clm12").css({
        backgroundColor: 'transparent'
    })
});
$(".clm13").hover(function () {
    $(".clm13").css({
        backgroundColor: '#f6effe'
    })
}, function () {
    $(".clm13").css({
        backgroundColor: 'transparent'
    })
});

$(document).ready(function () {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 0 ? 0 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
    $('.plus_child').click(function () {
        var $input = $(this).parent().find('input');
        if ($input.val() <= 16) {
            $input.val(parseInt($input.val()) + 1);
        }


        $input.change();
        return false;
    });

});
