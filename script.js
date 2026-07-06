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

const button3 = document.getElementById("text-analyzer-button");
button3.addEventListener("click", function () {
    const input4 = document.getElementById("text-analyzer-input").value;
    const textAnalyzerSelect = document.getElementById("text-analyzer-select");

    let answer;
    //Character count code
    if (textAnalyzerSelect.value === "char-count") {
        answer = input4.length;
    }
    //Word count code
    else if (textAnalyzerSelect.value === "word-count") {
        answer = input4.split(' ').length;
    }
    //Sentence count code
    else if (textAnalyzerSelect.value === "sentence-count") {
        answer = input4.split(".").length - 1;
    }
//Most common word code
    else if (textAnalyzerSelect.value === "most-common-word") {
        //split the input text into an array of words and count the occurrences of each word
        const words = input4.split(' ');
        //create an object to store the word count
        const wordCount = {};
        //initialize variables to keep track of the most common word and its count
        let maxCount = 0;
        //initialize a variable to store the most common word
        let mostCommonWord = '';
        //loop through the array of words and count the occurrences of each word
        for (let i = 0; i < words.length; i++) {
            const word = words[i].toLowerCase();
            //check if the word is already in the wordCount object, if it is, increment its count, if not, add it to the object with a count of 1
            if (wordCount[word]) {
                wordCount[word]++;
                //check if the current word's count is greater than the maxCount, if it is, update the maxCount and mostCommonWord variables
            } else {
                wordCount[word] = 1;
            }
            if (wordCount[word] > maxCount) {
                //update the maxCount and mostCommonWord variables
                maxCount = wordCount[word];
                //update the mostCommonWord variable with the current word
                mostCommonWord = word;
            }
        }
        //set the answer variable to the most common word
        answer = mostCommonWord;
    }
    else {
        //if the selected option is not valid, set the answer variable to "Invalid analysis"
        answer = "Invalid analysis";
    }
    // Display the answer in the output <div> element with id "text-analyzer-output"
    document.getElementById("text-analyzer-output").innerHTML = answer;
});


const button4 = document.getElementById("json-formatter-button")
//add event listener for click event 
button4.addEventListener("click", function () {
    //get the value of each 6 input boxesß
    const output1 = document.getElementById("json-formatter-input-a").value;
    const output2 = document.getElementById("json-formatter-input-b").value;
    const output3 = document.getElementById("json-formatter-input-2a").value;
    const output4 = document.getElementById("json-formatter-input-2b").value;
    const output5 = document.getElementById("json-formatter-input-3a").value;
    const output6 = document.getElementById("json-formatter-input-3b").value;
        //to do key value pair with the key also being the user input, you need to add them to a list in square brackets
        const format = {
            [output1]: output2,
            [output3]: output4,
            [output5]: output6 
        };
    //if first input box is empty add error, first one required last 2 are optional 
    if (output1 === "") {
        document.getElementById("json-formatter-output").innerHTML = "Invalid, first JSON pair must not be empty";
    }
    else {

        //each key value pair to be on new line for text visibility 
        const obj_format = JSON.stringify(format, null, '<br>')
    

        //output the new JSON formatted text
        document.getElementById("json-formatter-output").innerHTML = obj_format;
    }
});