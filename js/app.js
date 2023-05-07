// step-1 get random 4 digit pin number
function generateRandomPin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}
// step-2 check if the random number is 4 digits
function getPin() {
    const pin = generateRandomPin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin()
    }
}
// step-3 connect btn to get the pin
document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();

    // display pin 
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});

// calculator section
document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;

    const typedNumberField = document.getElementById('typed-number');
    const previousTypedNumber = typedNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else {
        //get pin side by side
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
});

// verify pin number 
document.getElementById('verify-btn').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-number')
    const typedNumber = typedNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinUnmatched = document.getElementById('pin-unmatched');

    if(typedNumber === currentPin){
        pinSuccessMessage.style.display = 'block';
        pinUnmatched.style.display = 'none'
    }
    else{
        pinUnmatched.style.display ='block';
        pinSuccessMessage.style.display = 'none';
    }
})
