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
                lang: 'en',
                tooltipNights: true,
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
                lang: 'en',
                tooltipNights: true,
            });
        }
        // console.log($('#demo-3_1').offset().top);
