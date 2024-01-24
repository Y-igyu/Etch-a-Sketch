const container = document.querySelector("#container");


for (let i = 1; i <= 16; i++) {
    let column = document.createElement("div");
    column.classList.add("column");
    container.appendChild(column);
    for (let j = 1; j <= 16; j++) {
        let row = document.createElement("div");
        row.classList.add("row");
        column.appendChild(row);
    }
}
