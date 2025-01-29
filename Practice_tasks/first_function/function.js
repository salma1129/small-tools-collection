let Amount1;
let Amount2;
let Amount3;

function calculateTotalAmount() {
    Amount1 = parseFloat(document.getElementById('Amount1').value);
    Amount2 = parseFloat(document.getElementById('Amount2').value);
    Amount3 = parseFloat(document.getElementById('Amount3').value);

    
    
    let total = Amount1+Amount2+Amount3;
    document.getElementById('result').innerText = `The total amount is: ${total}`;
}