if ($(window).width() >= 801) {

    var picker = new Lightpick({
        field: document.getElementById('demo-3_1'),
        secondField: document.getElementById('demo-3_2'),
        firstDay: 7,
        autoclose: false,
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
        tooltipNights: true,
        lang: 'en',
    });
} else {
    var picker = new Lightpick({
        field: document.getElementById('demo-3_1'),
        secondField: document.getElementById('demo-3_2'),
        firstDay: 7,
        autoclose: false,
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
        tooltipNights: true,
        lang: 'en',
    });
};
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
})
