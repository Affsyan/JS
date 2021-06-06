
let arr = [["telephone", 13500], ["electric iron", 7250], ["scooter", 22630]];
var j = 0;
var table = document.createElement("table");
var sum = 0;
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
            var td = document.createElement('td');
            td.id = "button" + y;
            td.className = "button";
            td.textContent = "Купить";
            tr.appendChild(td);
            table.appendChild(tr);
        }
    }
}
document.body.appendChild(table);

button0.onclick = function () {
    j++;
    sum = sum + arr[0][1];
    basket.textContent = "В корзине " + j + " товаров на сумму " + sum;
}
button1.onclick = function () {
    j++;
    sum = sum + arr[1][1];
    basket.textContent = "В корзине " + j + " товаров на сумму " + sum;
}
button2.onclick = function () {
    j++;
    sum = sum + arr[2][1];
    basket.textContent = "В корзине " + j + " товаров на сумму " + sum;
}


