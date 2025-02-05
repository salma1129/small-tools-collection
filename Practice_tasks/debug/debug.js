function performOperations() {
    // Get user input
    let num1 = document.getElementById('input1').value;
    let num2 = document.getElementById('input2').value;   

    // Convert inputs to numbers
    let number1 = parseFloat(num1);
    let number2 = parseFloat(num2);

    // Check if inputs are valid numbers
    if (!isNaN(number1) && !isNaN(number2)) {
        // Perform arithmetic operations
        let sum = number1 + number2;
        let product = number1 * number2;
        let division = number2 !== 0 ? number1 / number2 : "Cannot divide by zero";
        debugger;

        // Display results
        displayResult(sum, product, division);
    } else {
        displayResult("Invalid input", "Invalid input", "Invalid input");
    }
}

function displayResult(sum, product, division) {
    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <strong>Results:</strong><br>
        Addition: ${sum} <br>
        Multiplication: ${product} <br>
        Division: ${division}
    `;
}