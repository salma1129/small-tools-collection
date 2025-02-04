function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        let result = multiply(num1, num2);

        // Display the result
        displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
    }

            function operation(num1, num2) {
                // Introduce a debugger statement to pause execution
                debugger;

                // Multiply the numbers
                m=num1 * num2;
                a=num1 + num2;
                d=num1 / num2;
                return m,a,d;
        

            }

            function displayResult(result) {
                // Display the result in the paragraph element
                const resultElement = document.getElementById('result');
                resultElement.textContent = `The result is: ${result}`;
            }
        