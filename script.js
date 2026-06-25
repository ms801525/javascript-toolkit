const button = document.getElementById("calculate-button");

button.addEventListener("click", function () {


    const input1 = Number(document.getElementById("input1").value);
    const input2 = Number(document.getElementById("input2").value);
    const operations = document.getElementById("operations");

    let answer;
    if (operations.value === "add") {
        answer = input1 + input2;
    }
    else if (operations.value === "subtract") {
        answer = input1 - input2;
    }
    else if (operations.value === "multiply") {
        answer = input1 * input2;
    }
    else if (operations.value === "divide") {
        if (input2 === 0) {
            answer = "Cannot divide by zero";
        } else {
            answer = input1 / input2;
        }
    }
    else {
        answer = "Invalid operation";
    }
    document.getElementById("output").innerHTML = answer;

});