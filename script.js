const button = document.getElementById("calculate-button");
const input2box = document.getElementById("input2");
const operations = document.getElementById("operations");

operations.addEventListener("change", function () {
    if (operations.value === "sqrt") {
        input2box.disabled = true; 
        input2box.value = "";

    } 
    else {
        input2box.disabled = false;
    }
});

button.addEventListener("click", function () {


    const inputValue_calc = document.getElementById("input1").value;
    const input1 = Number(inputValue_calc)
    const inputValue_calc2 = document.getElementById("input2").value;
    const input2 = Number(inputValue_calc2)
    const operations = document.getElementById("operations");

    let answer;
    //check if first number is empty and make sure the user inputs a first number
    if (inputValue_calc === "" || isNaN(input1)) {
        answer = "Not Valid, Please Input Numbers";
    }
    //for sqrt the user does not need to enter a second number but for all other operations a second number is needed 
    else if (operations.value !== "sqrt" && (inputValue_calc2 === "" || isNaN(input2))) {
        answer = "Not Valid, Please Input Second Number";
    }
    //Conversion operations 
    else if (operations.value === "add") {
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
            answer = "Cannot divide by zero!";

        } else {
            answer = input1 / input2;
        }
    }
    else if (operations.value === "pow") {
        answer = input1**input2;
    }
    else if (operations.value === "sqrt") {

        answer = Math.sqrt(input1); 
    }
    else {
        answer = "Invalid operation";
    }


    // Display the answer in the output <div> element with id "output"
    document.getElementById("output").innerHTML = "Result:  " + answer;

});



//code for using enter button instead of using button for the calculator and user presses enter from first input box
input1.addEventListener("keypress", function (event) {
    const inputValue_calc = document.getElementById("input1").value;
    const num1 = Number(inputValue_calc);

    const inputValue_calc2 = document.getElementById("input2").value;
    const num2 = Number(inputValue_calc2);

    const operations = document.getElementById("operations");
    //need event key to know when user clicks enter
    if (event.key === "Enter") {
        let answer;

        //check if first number is empty and make sure the user inputs a first number
        if (inputValue_calc === "" || isNaN(num1)) {
            answer = "Not Valid, Please Input Numbers";
        }
        //for sqrt the user does not need to enter a second number but for all other operations a second number is needed 
        else if (operations.value !== "sqrt" && (inputValue_calc2 === "" || isNaN(num2))) {
            answer = "Not Valid, Please Input Second Number";
        }
        else if (operations.value === "add") {
            answer = num1 + num2;
        }
        else if (operations.value === "subtract") {
            answer = num1 - num2;
        }
        else if (operations.value === "multiply") {
            answer = num1 * num2;
        }
        else if (operations.value === "divide") {
            if (num2 === 0) {
                answer = "Cannot divide by zero!";
    
            } else {
                answer = num1/ num2;
            }
        }
        else if (operations.value === "pow") {
            answer = num1**num2;
        }
        else if (operations.value === "sqrt") {
    
            answer = Math.sqrt(num1); 
        }
        else {
            answer = "Invalid operation";
        } 

        document.getElementById("output").innerHTML = "Result:  " +answer;
        event.preventDefault();
    }
});
//this is the code for the calculator where user presses enter from the second input box 
input2.addEventListener("keypress", function (event) {
    const inputValue_calc = document.getElementById("input1").value;
    const num1 = Number(inputValue_calc);

    const inputValue_calc2 = document.getElementById("input2").value;
    const num2 = Number(inputValue_calc2);

    const operations = document.getElementById("operations");
    //need event key to know when user clicks enter
    if (event.key === "Enter") {
        let answer;

        //check if first number is empty and make sure the user inputs a first number
        if (inputValue_calc === "" || isNaN(num1)) {
            answer = "Not Valid, Please Input Numbers";
        }
        //for sqrt the user does not need to enter a second number but for all other operations a second number is needed 
        else if (operations.value !== "sqrt" && (inputValue_calc2 === "" || isNaN(num2))) {
            answer = "Not Valid, Please Input Second Number";
        }
        else if (operations.value === "add") {
            answer = num1 + num2;
        }
        else if (operations.value === "subtract") {
            answer = num1 - num2;
        }
        else if (operations.value === "multiply") {
            answer = num1 * num2;
        }
        else if (operations.value === "divide") {
            if (num2 === 0) {
                answer = "Cannot divide by zero!";
    
            } else {
                answer = num1/ num2;
            }
        }
        else if (operations.value === "pow") {
            answer = num1**num2;
        }
        else if (operations.value === "sqrt") {
    
            answer = Math.sqrt(num1); 
        }
        else {
            answer = "Invalid operation";
        } 

        document.getElementById("output").innerHTML = "Result:  " +answer;
        event.preventDefault();
    }
});







//this is JS for the Unit Converter
const button2 = document.getElementById("unit-converter-button");

button2.addEventListener("click", function () {
    const inputValue = document.getElementById("unit-converter-input").value;
    const input3 = Number(inputValue)
    const unitConverterSelect = document.getElementById("unit-converter-select");

    let answer;
    //=== "" means nothing was typed, so i am aksing if box is empty or input is not a number show an error, if either one is yes it becomes true and shows error, it catches the empty box before JS turns it into 0 
    if (inputValue === "" || isNaN(input3)) {
        answer = "Not valid, need to input a number";
    }
    //kg to lbs conversion code
    else if (unitConverterSelect.value === "kg-to-lbs") {
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
    document.getElementById("unit-converter-output").innerHTML = "Result:  " +answer;
});


//this is the code for using the enter button to perform task
input_converter = document.getElementById("unit-converter-input");
input_converter.addEventListener("keypress", function (event) {
    const inputValue = document.getElementById("unit-converter-input").value;
    const input3 = Number(inputValue)
    const unitConverterSelect = document.getElementById("unit-converter-select");

    let answer;
    //=== "" means nothing was typed, so i am aksing if box is empty or input is not a number show an error, if either one is yes it becomes true and shows error, it catches the empty box before JS turns it into 0 
    //need event key to know when user clicks enter
    if (event.key === "Enter") {
        if (inputValue === "" || isNaN(input3)) {
            answer = "Not valid, need to input a number";
        }
        //kg to lbs conversion code
        else if (unitConverterSelect.value === "kg-to-lbs") {
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
        document.getElementById("unit-converter-output").innerHTML = "Result:  " +answer;
        event.preventDefault();
    }
});








//this is code for the analyzer using button to perform operation 
const button3 = document.getElementById("text-analyzer-button");
button3.addEventListener("click", function () {
    const input4 = document.getElementById("text-analyzer-input").value;
    const textAnalyzerSelect = document.getElementById("text-analyzer-select");

    let answer;
    if (input4 === "") {
        answer = "Invalid Input. Enter text to be analyzed";
    }
    //Character count code
    else if (textAnalyzerSelect.value === "char-count") {
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
    document.getElementById("text-analyzer-output").innerHTML = "Result:  " +answer;
});

//this is the code for text analyzer using the enter button 
input_analyzer = document.getElementById("text-analyzer-input")
input_analyzer.addEventListener("keypress", function (event) {
//need event key to know when user clicks enter
    if (event.key === "Enter"){
        const input4 = document.getElementById("text-analyzer-input").value;
    const textAnalyzerSelect = document.getElementById("text-analyzer-select");

    let answer;
    if (input4 === "") {
        answer = "Invalid Input. Enter text to be analyzed";
    }
    //Character count code
    else if (textAnalyzerSelect.value === "char-count") {
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
    document.getElementById("text-analyzer-output").innerHTML = "Result:  " +answer;
    event.preventDefault();
    }

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
        const format = {};
            if (output1 !== "") {
                format[output1] = output2;
            }
            if (output3 !== "") {
                format[output3] = output4;
            }
            if (output5 !== "") {
                format[output5] = output6;
            }
    //if first input box is empty add error, first one required last 2 are optional 
    if (output1 === "" || output2 === "") {
        document.getElementById("json-formatter-output").innerHTML = "Invalid, first JSON key:value pair must not be empty";
    }
    else {

        //each key value pair to be on new line for text visibility 
        const obj_format = JSON.stringify(format, null, 2)
    

        //output the new JSON formatted text
        document.getElementById("json-formatter-output").innerHTML = obj_format;
    }
});
//code for the JSON formatter task using the enter button to perform task instead of button 
input_json = document.querySelectorAll(".json-formatter-input");
input_json.forEach(function (input) {
    
    input.addEventListener("keypress", function (event) { 
        //need event key to know when user clicks enter
        if (event.key === "Enter") {
            event.preventDefault();
            //get the value of each 6 input boxesß
            const output1 = document.getElementById("json-formatter-input-a").value;
            const output2 = document.getElementById("json-formatter-input-b").value;
            const output3 = document.getElementById("json-formatter-input-2a").value;
            const output4 = document.getElementById("json-formatter-input-2b").value;
            const output5 = document.getElementById("json-formatter-input-3a").value;
            const output6 = document.getElementById("json-formatter-input-3b").value;
            //to do key value pair with the key also being the user input, you need to add them to a list in square brackets
            const format = {};
            if (output1 !== "") {
                format[output1] = output2;
            }
            if (output3 !== "") {
                format[output3] = output4;
            }
            if (output5 !== "") {
                format[output5] = output6;
            }
            
            //if first input box is empty add error, first one required last 2 are optional 
            if (output1 === "") {
                document.getElementById("json-formatter-output").innerHTML = "Invalid, first JSON pair must not be empty";
            }
            else {

                //each key value pair to be on new line for text visibility 
                const obj_format = JSON.stringify(format, null, 2)
        

                //output the new JSON formatted text
                document.getElementById("json-formatter-output").innerHTML = obj_format;
                
            }
            
        }
    });

});








//code for clear button for calculator
const button_clear = document.getElementById("clear-button-calculator")

button_clear.addEventListener("click", function () {
    
    const input_field_a = document.getElementById("input1").value = ''
    const input_field_b = document.getElementById("input2").value = ''

    location.reload()
});


//code for unit converter clear button 
const button_clear2 = document.getElementById("clear-button-unit")

button_clear2.addEventListener("click", function () {
    
    const input_json = document.getElementById("unit-converter-input").value = ''
    location.reload()
});

//code for text analyzer clear button
const button_clear3 = document.getElementById("clear-button-analyzer")

button_clear3.addEventListener("click", function () {
    
    const input_json = document.getElementById("text-analyzer-input").value = ''
    location.reload()
});


//code for JSON foratter clear button 
const button_clear4 = document.getElementById("clear-button-json")

button_clear4.addEventListener("click", function () {
    
    const input_json = document.getElementById("json-formatter-input-a").value = ''
    const input_json2 = document.getElementById("json-formatter-input-2a").value = ''
    const input_json3 = document.getElementById("json-formatter-input-3a").value = ''
    const input_json4 = document.getElementById("json-formatter-input-b").value = ''
    const input_json5 = document.getElementById("json-formatter-input-2b").value = ''
    const input_json6 = document.getElementById("json-formatter-input-3b").value = ''
    location.reload()
});
// get the ID of both the button and output to conenct them
const button_copy = document.getElementById("copy-button");
const output = document.getElementById("json-formatter-output");



//copy button and checker for if field has any text in it to copy or not
button_copy.addEventListener("click", function () {
    //use text content instead of value,p element does not have a value property, when displaying JSON inside <p> or any  text, use the content inside the p by doing text content 
    //to check the text use the text content becasue the output is the <pre> itself, you need the content in the <pre>
    if (output.textContent.trim()==="") {
        document.getElementById("copied-text").innerHTML = "Nothing to copy";
    }
    else {
        navigator.clipboard.writeText(output.textContent);
        document.getElementById("copied-text").innerHTML = "Copied!";
    }


});