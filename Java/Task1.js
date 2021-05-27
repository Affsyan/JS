'use strict';

let i = 2;
let count = 0;

while (i <= 100) {
    count = 0
    for (var j = 2; j <= i; j++) {
        if (i % j == 0) {
            count++;
        }
    }
    if (count == 1) {
        console.log(i)
    }
    i++;
}