let numbers = [];

// DISPLAY NUMBERS
function displayNumbers() {
    let list = document.getElementById("numberList");
    list.innerHTML = "";

    numbers.forEach(function(num, index) {

        let type = num % 2 === 0 ? "EVEN" : "ODD";
        let color = num % 2 === 0 ? "green" : "pink";

        list.innerHTML +=
            "<div style='margin-bottom: 8px;'>" +
            "<span style='display:inline-block; width:65px;'>" +
            num +
            "</span>" +

            "<span style='display:inline-block; width:65px; color:" +
            color + ";'>" +
            type +
            "</span>" +

            "<button onclick='removeNumber(" + index + ")'>Remove</button> " +

            "<button onclick='editNumber(" + index + ")'>Edit</button>" +

            "</div>";
    });
}


// INSERT NUMBER
function insertNumber() {
    let input = document.getElementById("numberInput");
    let value = input.value.trim();
    let num = Number(value);

    if (value === "" || isNaN(num) || num <= 0) {
        alert("Please input a positive number");
        return;
    }

    numbers.push(num);
    input.value = "";

    displayNumbers();
}


// TOTAL
function getTotal() {
    let total = 0;

    numbers.forEach(function(num) {
        total += num;
    });

    document.getElementById("totalDisplay").innerHTML =
        "<br><b>TOTAL</b> &nbsp; " + total;
}


// HIGHEST AND LOWEST
function findHighestLowest() {

    if (numbers.length === 0) {
        return;
    }

    let highest = numbers[0];
    let lowest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {

        if (numbers[i] > highest) {
            highest = numbers[i];
        }

        if (numbers[i] < lowest) {
            lowest = numbers[i];
        }
    }

    document.getElementById("highestDisplay").innerHTML =
        "<br><b>HIGHEST</b> &nbsp; <u>" + highest + "</u>";

    document.getElementById("lowestDisplay").innerHTML =
        "<br><b>LOWEST</b> &nbsp; <u>" + lowest + "</u>";
}


// REMOVE
function removeNumber(index) {

    numbers.splice(index, 1);
    displayNumbers();

    clearResults();
}


// EDIT
function editNumber(index) {

    let value = prompt("Enter new number:", numbers[index]);

    if (value === null) {
        return;
    }

    value = value.trim();
    let num = Number(value);

    if (value === "" || isNaN(num) || num <= 0) {
        alert("Please input a positive number");
        return;
    }

    numbers[index] = num;

    displayNumbers();
}


// CLEAR RESULTS
function clearResults() {
    document.getElementById("totalDisplay").innerHTML = "";
    document.getElementById("highestDisplay").innerHTML = "";
    document.getElementById("lowestDisplay").innerHTML = "";
}


// CLEAR ENTRY
function clearEntry() {
    let input = document.getElementById("numberInput");
    input.value = "";
}


// CLEAR ALL ITEMS
function clearItems() {

    numbers.length = 0;

    document.getElementById("numberList").innerHTML = "";
    document.getElementById("totalDisplay").innerHTML = "";
    document.getElementById("highestDisplay").innerHTML = "";
    document.getElementById("lowestDisplay").innerHTML = "";

    document.getElementById("sortOrder").value = "";
}


// SORT NUMBERS
function sortNumbers() {

    let choice = document.getElementById("sortOrder").value;

    if (choice === "ascending") {
        numbers.sort((a, b) => a - b);
    } 
    else if (choice === "descending") {
        numbers.sort((a, b) => b - a);
    }

    displayNumbers();
}