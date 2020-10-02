

//    slider
var items = document.querySelectorAll('.slide');
const itemCount = items.length;
const nextItem = document.querySelector('.arrowNext');
const previousItem = document.querySelector('.arrowPrew');
let count = 0;
var num = document.querySelector('.num');
var a = 1;
//num.innerHTML = 'Page ' + a + ' ( of ' + items.length + ' )';

function showNextItem() {
    items[count].classList.remove('active');
    $('.next').removeClass('nextDefoult');
    $('.previous').removeClass('previousDefoult');
    if (count < itemCount - 1) {
        count++;
        a+=1;
        num.innerHTML = 'Page ' + a + ' ( of ' + items.length + ' )';
    }
    if (count == itemCount - 1) {
        $('.next').addClass('nextDefoult');
    }

    items[count].classList.add('active');
}

function showPreviousItem() {
    items[count].classList.remove('active');
    $('.next').removeClass('nextDefoult');
    $('.previous').removeClass('previousDefoult');

    if (count > 0) {
        count--;
        a--;
        num.innerHTML = 'Page ' + a + ' ( of ' + items.length + ' )';
    }
    if (count == 0) {
        $('.previous').addClass('previousDefoult');
    }

    items[count].classList.add('active');
}

function keyPress(e) {
    e = e || window.event;

    if (e.keyCode == '37') {
        showPreviousItem();
    } else if (e.keyCode == '39') {
        showNextItem();
    }
}

nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);
document.addEventListener('keydown', keyPress);


