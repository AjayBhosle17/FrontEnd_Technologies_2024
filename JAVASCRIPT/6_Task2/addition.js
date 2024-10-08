function addition() {
    // Clear any previous messages
    // document.getElementById('message').innerText = '';

    var firstNo = parseInt(document.getElementById('num1').value.trim());
    var SecondNo = parseInt(document.getElementById('num2').value.trim());

    // Check if the first number is invalid
    if (isNaN(firstNo)) {
        document.getElementById('message').innerText = 'Please enter a valid First Number';
        return false;
    }

    // Check if the second number is invalid
    if (isNaN(SecondNo)) {
        document.getElementById('message').innerText = 'Please enter a valid Second Number';
        return false;
    }

    // Perform the addition
    document.getElementById('result').value = firstNo + SecondNo;
    document.getElementById('num1').value='';
}
