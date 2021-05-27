'use strict';

var len = 10;
var list = [];
var sum = 0;

function countBasketPrice(fList, len) {
    for (var j = 0; j < len; j++) {
        sum = sum + fList[j];
    }
    return console.log('В корзине ' + len + ' товаров. На сумму ' + sum);
}

for (var i = 0; i <= len; i++) {
    list.push(Math.floor(Math.random() * 100));
}

console.log(list);

countBasketPrice(list, len);