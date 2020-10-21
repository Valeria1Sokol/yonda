if ($(window).width() >= 801) {
    var picker = new Lightpick({
        field: document.getElementById('demo-1'),
        singleDate: false,
        onSelect: function (start, end) {
            var str = '';
            str += start ? start.format('Do MMMM YYYY') + ' to ' : '';
            str += end ? end.format('Do MMMM YYYY') : '...';
        },
        firstDay: 7,
        selectForward: true,
        footer: true,
        numberOfMonths: 2,
        locale: {
            buttons: {
                prev: ' ',
                next: ' ',
                apply: 'Apply'
            },
        },
        lang: 'en',
        autoclose: false,
        tooltipNights: true,
    });
//    var picker2 = new Lightpick({
//        field: document.getElementById('demo-2'),
//        singleDate: false,
//        onSelect: function (start, end) {
//            var str = '';
//            str += start ? start.format('Do MMMM YYYY') + ' to ' : '';
//            str += end ? end.format('Do MMMM YYYY') : '...';
//        },
//        firstDay: 7,
//        selectForward: true,
//        footer: true,
//        numberOfMonths: 2,
//        locale: {
//            buttons: {
//                prev: ' ',
//                next: ' ',
//                apply: 'Apply'
//            },
//        },
//        lang: 'en',
//        autoclose: false,
//        tooltipNights: true,
//    });
} else {
    var picker = new Lightpick({
        field: document.getElementById('demo-1'),
        singleDate: false,
        onSelect: function (start, end) {
            var str = '';
            str += start ? start.format('Do MMMM YYYY') + ' to ' : '';
            str += end ? end.format('Do MMMM YYYY') : '...';
        },
        firstDay: 7,
        selectForward: true,
        footer: true,
        numberOfMonths: 1,
        locale: {
            buttons: {
                prev: ' ',
                next: ' ',
                apply: 'Apply'
            },
        },
        lang: 'en',
        autoclose: false,
        tooltipNights: true,
    });
//    var picker2 = new Lightpick({
//        field: document.getElementById('demo-2'),
//        singleDate: false,
//        onSelect: function (start, end) {
//            var str = '';
//            str += start ? start.format('Do MMMM YYYY') + ' to ' : '';
//            str += end ? end.format('Do MMMM YYYY') : '...';
//        },
//        firstDay: 7,
//        selectForward: true,
//        footer: true,
//        numberOfMonths: 1,
//        locale: {
//            buttons: {
//                prev: ' ',
//                next: ' ',
//                apply: 'Apply'
//            },
//        },
//        lang: 'en',
//        autoclose: false,
//        tooltipNights: true,
//    });
};

//$(".sec5_btn").click(function () {
//    var result = document.getElementById("result");
//    var adult = document.getElementById("adult1").value;
//    var child = document.getElementById("child1").value;
//    var count = 0;
//    var child_num = $('#child1').val();
//    if (child_num > 0) {
//        child_num = 1;
//        count = Number(adult) + child_num;
//    } else {
//        count = Number(adult);
//    }
//    result.value = "Room1, " + count + " guests";
//    jQuery.noConflict();
//    $(this).parents('.dropdown-menu').toggleClass('show');
//
//});
$(".black_btn").click(function () {
    var myP = document.getElementById("res");
    var adult = document.getElementById("adult").value;
    var child = document.getElementById("child").value;
    var count = 0;
    var child_num = $('#child').val();
    if (child_num > 0) {
        child_num = 1;
        count = Number(adult) + child_num;
    } else {
        count = Number(adult);
    }
    myP.value = "Room1, " + count + " guests";
    jQuery.noConflict();
    $(this).parents('.dropdown-menu').toggleClass('show');
});
