'use strict'

let arr = [["telephone", 13500, 0, 1], ["electric iron", 7250, 1, 1], ["scooter", 22630, 2, 1]];
var table = document.createElement("table");

let baskArr = [];
//basket.textContent = "Корзина пуста"

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
    console.log(baskArr);
    basket(baskArr, sum);
})

function basket(baskArr, sum) {

    const basket = document.querySelector("#basket");
    basket.textContent = '';

    for (var y = 0; y < baskArr.length; y++) {
        var tr = document.createElement('tr');
        for (var i = 1; i <= 2; i++) {
            if (i % 2 != 0) {
                var td = document.createElement('td');
                td.className = "text";
                td.textContent = "Товар: " + baskArr[y][0] + " Цена: " + baskArr[y][1] + " Колличество: " + baskArr[y][3];
                tr.appendChild(td);
                basket.appendChild(tr);
            } else {
                var td = document.createElement('BUTTONBASK');
                td.id = "button" + y;
                td.className = "button";
                td.textContent = "Удалить";
                td.dataset.id = y;
                tr.appendChild(td);
                basket.appendChild(tr);
            }
        }
    }
    if (baskArr.length == 0) {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.className = "text";
        td.textContent = "Корзина пуста";
        tr.appendChild(td);
        basket.appendChild(tr);
    } else {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.className = "text";
        td.textContent = "В корзине " + baskArr.length + " товара на сумму " + sum;
        tr.appendChild(td);
        var td = document.createElement('NEXT');
        td.className = "button";
        td.textContent = "Далее";
        td.dataset.id = "next";
        tr.appendChild(td);
        basket.appendChild(tr);
    }
}

const baskets = document.querySelector("#basket");

baskets.addEventListener('click', function (e) {
    var sum = 0;
    if (e.target.tagName === 'BUTTONBASK') {
        if (baskArr[e.target.dataset.id][3] == 1) {
            baskArr.splice(e.target.dataset.id, 1);
        } else {
            baskArr[e.target.dataset.id][3] = baskArr[e.target.dataset.id][3] - 1;
        }
        for (var j = 0; j < baskArr.length; j++) {
            sum = sum + (baskArr[j][1] * baskArr[j][3])
        }
        console.log(arr);
        basket(baskArr, sum);
    }

})

baskets.addEventListener('click', function (e) {
    if (e.target.tagName === 'NEXT') {
        popup.style.display = 'block';
    }
})

const popup = document.querySelector('#popup');
const closePopupBtn = document.querySelector('#closePopupBtn');

function closePopup(e) {
    if (e.type === 'click' || e.key === 'Escape') {
        popup.style.display = 'none';
    }
}

closePopupBtn.addEventListener('click', closePopup);
document.addEventListener('keydown', closePopup);