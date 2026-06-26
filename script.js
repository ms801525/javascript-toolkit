const button = document.getElementById("calculate-button");

button.addEventListener("click", function () {


    const input1 = Number(document.getElementById("input1").value);
    const input2 = Number(document.getElementById("input2").value);
    const operations = document.getElementById("operations");

    let answer;
    //Conversion operations 
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
    // Display the answer in the output <div> element with id "output"
    document.getElementById("output").innerHTML = answer;

});

const button2 = document.getElementById("unit-converter-button");

button2.addEventListener("click", function () {
    const input3 = Number(document.getElementById("unit-converter-input").value);
    const unitConverterSelect = document.getElementById("unit-converter-select");

    let answer;
    //kg to lbs conversion code 
    if (unitConverterSelect.value === "kg-to-lbs") {
        //conversion formula for kg to lbs
        answer = input3 * 2.20462;
        //rounding the answer to 2 decimal places
        let roundedAnswer = answer.toFixed(2);
        answer = roundedAnswer;
    }
    //km to miles conversion code
    else if (unitConverterSelect.value === "km-to-miles") {
        //conversion formula for km to miles
        answer = input3 * 0.621371;
        //rounding the answer to 2 decimal places
        let roundedAnswer = answer.toFixed(2);
        answer = roundedAnswer;
    }
    //celsius to fahrenheit conversion code
    else if (unitConverterSelect.value === "celsius-to-fahrenheit") {
        //conversion formula for celsius to fahrenheit
        answer = (input3 * 9 / 5) + 32;
        //rounding the answer to 2 decimal places
        let roundedAnswer = answer.toFixed(2);
        answer = roundedAnswer;
    }
    //lbs to kg conversion code
    else if (unitConverterSelect.value === "lbs-to-kg") {
        //conversion formula for lbs to kg
        answer = input3 / 2.20462;
        //rounding the answer to 2 decimal places
        let roundedAnswer = answer.toFixed(2);
        answer = roundedAnswer;
    }
    //miles to km conversion code
    else if (unitConverterSelect.value === "miles-to-km") {
        //conversion formula for miles to km
        answer = input3 / 0.621371;
        //rounding the answer to 2 decimal places
        let roundedAnswer = answer.toFixed(2);
        answer = roundedAnswer;
    }
    //fahrenheit to celsius conversion code
    else if (unitConverterSelect.value === "fahrenheit-to-celsius") {
        //conversion formula for fahrenheit to celsius
        answer = (input3 - 32) * 5 / 9;
        //rounding the answer to 2 decimal places
        let roundedAnswer = answer.toFixed(2);
        answer = roundedAnswer;
    }
    //meters to feet conversion code
    else if (unitConverterSelect.value === "meters-to-feet") {
        //conversion formula for meters to feet
        answer = input3 * 3.28084;
        //rounding the answer to 2 decimal places
        let roundedAnswer = answer.toFixed(2);
        answer = roundedAnswer;
    }
    //feet to meters conversion code
    else if (unitConverterSelect.value === "feet-to-meters") {
        //conversion formula for feet to meters
        answer = input3 / 3.28084;
        //rounding the answer to 2 decimal places
        let roundedAnswer = answer.toFixed(2);
        answer = roundedAnswer;
    }
    //liters to gallons conversion code
    else if (unitConverterSelect.value === "liters-to-gallons") {
        //conversion formula for liters to gallons
        answer = input3 * 0.264172;
        //rounding the answer to 2 decimal places
        let roundedAnswer = answer.toFixed(2);
        answer = roundedAnswer;
    }
    //gallons to liters conversion code
    else if (unitConverterSelect.value === "gallons-to-liters") {
        //conversion formula for gallons to liters
        answer = input3 / 0.264172;
        let roundedAnswer = answer.toFixed(2);
        answer = roundedAnswer;
    }
    //inches to centimeters conversion code
    else if (unitConverterSelect.value === "inches-to-centimeters") {
        //conversion formula for inches to centimeters
        answer = input3 * 2.54;
        //rounding the answer to 2 decimal places
        let roundedAnswer = answer.toFixed(2);
        answer = roundedAnswer;
    }
    //centimeters to inches conversion code
    else if (unitConverterSelect.value === "centimeters-to-inches") {
        //conversion formula for centimeters to inches
        answer = input3 / 2.54;
        //rounding the answer to 2 decimal places
        let roundedAnswer = answer.toFixed(2);
        answer = roundedAnswer;
    }
    else {
        answer = "Invalid conversion";
    }
    // Display the answer in the output <div> element with id "unit-converter-output"
    document.getElementById("unit-converter-output").innerHTML = answer;
});