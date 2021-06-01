var sumbol = ['A', "B", "C", "D", "E", "F", "G", "H"]
var table = document.createElement("table");
for (var i = 1; i < 10; i++) {
    var tr = document.createElement('tr');
    if (i == 9) {
        for (var y = 1; y < 10; y++) {
            var td = document.createElement('td');
            td.className = "text";
            td.textContent = sumbol[y-1];
            tr.appendChild(td);
        }
    } else {
        for (var j = 1; j < 10; j++) {
            var td = document.createElement('td');
            if (j == 9) {
                td.className = "text";
                td.textContent = i;
            } else {
                if (i % 2 == j % 2) {
                    td.className = "white";
                } else {
                    td.className = "black";
                }
            }
            tr.appendChild(td);
        }
    }
    table.appendChild(tr);
}
document.body.appendChild(table);









