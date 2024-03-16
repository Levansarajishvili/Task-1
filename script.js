// ახალი ცხრილის ელემენტი 
let table = document.createElement("table");

// რიგი 
for (let i = 0; i < 4; i++) {
    let row = table.insertRow();

    //    გრაფა 
    for (let j = 0; j < 5; j++) {
        let cell = row.insertCell();
        // + 1 მონაცემი 
        cell.textContent = i * 5 + j + 1;
    }
}

// ცხრილი მივაბათ html-ს 
document.body.appendChild(table);


