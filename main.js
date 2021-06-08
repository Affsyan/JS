'use strict'

let arr = [["telephone", 13500, 0, 1], ["electric iron", 7250, 1, 1], ["scooter", 22630, 2, 1]];
var table = document.createElement("table");
let baskArr = [];
basket.textContent = "Корзина пуста"

for (var y = 0; y < arr.length; y++) {
    var tr = document.createElement('tr');
    for (var i = 1; i <= 2; i++) {
        if (i % 2 != 0) {
            var td = document.createElement('td');
            td.className = "text";
            td.textContent = "Товар: " + arr[y][0] + " Цена: " + arr[y][1];
            tr.appendChild(td);
            table.appendChild(tr);
        } else {
            var td = document.createElement('BUTTON');
            td.id = "button" + y;
            td.className = "button";
            td.textContent = "Купить";
            td.dataset.id = y;
            tr.appendChild(td);
            table.appendChild(tr);
        }
    }
}
document.body.appendChild(table);

const tables = document.querySelector("table");

tables.addEventListener('click', function (e) {
    var sum = 0;
    if (e.target.tagName === 'BUTTON') {
        if (baskArr.length != 0) {
            let count = 0;
            for (var i = 0; i < baskArr.length; i++) {
                if (baskArr[i][2] == arr[e.target.dataset.id][2]) {
                    baskArr[i][3] = baskArr[i][3] + 1;
                    count = count + 1; 
                }
            }
            if (count == 0) {
                baskArr.push(arr[e.target.dataset.id]);
            }
        } else {
            baskArr.push(arr[e.target.dataset.id]);
        }
    }
    for (var j = 0; j < baskArr.length; j++) {
        sum = sum + (baskArr[j][1] * baskArr[j][3])
    }
    basket.textContent = "В корзине " + baskArr.length + " товара на сумму " + sum;
    console.log(baskArr);
})

