'use strict';

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+': console.log(arg1 + arg2);
            return;
        case '-': console.log(arg1 - arg2);
            return;
        case '*': console.log(arg1 * arg2);
            return;
        case '/': console.log(arg1 / arg2);
            return;
    }   
    console.log('Неизвестный арифметический знак');
}

mathOperation (1, 2, '-')