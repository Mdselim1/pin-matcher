
function randomNumber() {
    const pin = Math.round(Math.random() * 10000);
    const minFourDigit = pin + '';
    if (minFourDigit.length == 4) {
        return pin;
    } else {
        // console.log('Minumum Four Digit Need', pin);
        return randomNumber();
    }
}

function generatePin() {

    const pin = randomNumber();

    document.getElementById('display-pin').value = pin;


}

document.getElementById('key-pad').addEventListener('click', function (even) {
    const number = even.target.innerText;
    const calcInput = document.getElementById('number-print');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    } else {
        const calcInputNumber = calcInput.value;
        const newNumberCalc = calcInputNumber + number;
        calcInput.value = newNumberCalc;
    }

})
const resultPrintPass = document.getElementById('ok-id');
const resultPrintFailed = document.getElementById('not-id');


document.getElementById('submit-btn').addEventListener('click', function () {

    const whichInput = document.getElementById('display-pin');
    const whichInputValue = whichInput.value;
    const matchInput = document.getElementById('number-print');
    const matchInputValue = matchInput.value;
    matchInput.value = '';
    if (whichInputValue == matchInputValue) {
        resultPrintPass.style.display = 'block';
        resultPrintFailed.style.display = 'none';
    } else {
        resultPrintPass.style.display = 'none';
        resultPrintFailed.style.display = 'block';
    }

})