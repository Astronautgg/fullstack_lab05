function performOperation(operation) {
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
    var result;

    if (isNaN(number1)) {
        alert("Please enter a valid first number");
        return;
    }

    switch (operation) {
        case 'squareRoot':
            result = Math.sqrt(number1);
            break;
        case 'power':
            if (isNaN(number2)) {
                alert("Please enter a valid second number for power operation");
                return;
            }
            result = Math.pow(number1, number2);
            break;
        case 'percentage':
            if (isNaN(number2)) {
                alert("Please enter a valid second number for percentage operation");
                return;
            }
            result = (number1 * number2) / 100;
            break;
        default:
            result = "Invalid operation";
    }

    document.getElementById("result").innerText = result;
}
