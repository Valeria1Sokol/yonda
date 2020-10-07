var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");

var thumbLeft = document.querySelector(".slider > .thumb.left");
var thumbRight = document.querySelector(".slider > .thumb.right");
var range = document.querySelector(".slider > .range");

function setLeftValue() {
    var _this = inputLeft,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

    var percent = ((_this.value - min) / (max - min)) * 100;

    thumbLeft.style.left = percent + "%";
    range.style.left = percent + "%";
}
setLeftValue();

function setRightValue() {
    var _this = inputRight,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

    var percent = ((_this.value - min) / (max - min)) * 100;

    thumbRight.style.right = (100 - percent) + "%";
    range.style.right = (100 - percent) + "%";
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);





var inputLeft2 = document.getElementById("input-left2");
var inputRight2 = document.getElementById("input-right2");
var thumbLeft2 = document.querySelector(".slider4 > .thumb.left");
var thumbRight2 = document.querySelector(".slider4 > .thumb.right");
var range2 = document.querySelector(".slider4 > .range");

function setLeftValue2() {
    var _this = inputLeft2,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.min(parseInt(_this.value), parseInt(inputRight2.value) - 1);

    var percent = ((_this.value - min) / (max - min)) * 100;

    thumbLeft2.style.left = percent + "%";
    range2.style.left = percent + "%";
}
setLeftValue2();

function setRightValue2() {
    var _this = inputRight2,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft2.value) + 1);

    var percent = ((_this.value - min) / (max - min)) * 100;

    thumbRight2.style.right = (100 - percent) + "%";
    range2.style.right = (100 - percent) + "%";
}
setRightValue2();

inputLeft2.addEventListener("input", setLeftValue2);
inputRight2.addEventListener("input", setRightValue2);


var inputLeft3 = document.getElementById("input-left3");
var inputRight3 = document.getElementById("input-right3");
var thumbLeft3 = document.querySelector(".slider3 > .thumb.left");
var thumbRight3 = document.querySelector(".slider3 > .thumb.right");
var range3 = document.querySelector(".slider3 > .range");

function setLeftValue3() {
    var _this = inputLeft3,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.min(parseInt(_this.value), parseInt(inputRight3.value) - 1);

    var percent = ((_this.value - min) / (max - min)) * 100;

    thumbLeft3.style.left = percent + "%";
    range3.style.left = percent + "%";
}
setLeftValue3();

function setRightValue3() {
    var _this = inputRight3,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft3.value) + 1);

    var percent = ((_this.value - min) / (max - min)) * 100;

    thumbRight3.style.right = (100 - percent) + "%";
    range3.style.right = (100 - percent) + "%";
}
setRightValue3();

inputLeft3.addEventListener("input", setLeftValue3);
inputRight3.addEventListener("input", setRightValue3);
