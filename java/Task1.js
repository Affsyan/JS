'use strict';

var number = 123;
var list = {};

function signs(number) {
    number = String(number);
    list = {
        units: number[2],
        tens: number[1],
        hundreds: number[0]
    }
    console.log(list);
}

if (number >= 1000) {
    console.log("Число не может быть больше или равно 1000");
} else {
    signs(number);
}
