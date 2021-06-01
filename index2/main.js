const basket = document.querySelector('#basket');


let arr = [["telephone", 13500, 1], ["electric iron", 7250, 2], ["scooter", 22630, 1]];
let sum = 0;
let list = [];
let len = arr.length

function priceList(arr) {
    for (let i = 0; i < arr.length; i++) {
        list.push(
            {
                name: arr[i][0],
                price: arr[i][1],
                quantity: arr[i][2]
            }
        )
        sum = sum + (arr[i][1] * arr[i][2])
    }
    return sum
}


basket.insertAdjacentHTML('beforeend', "В корзине " + arr.length + " товара на сумму " + priceList(arr));




