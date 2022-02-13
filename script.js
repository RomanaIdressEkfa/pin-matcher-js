// document.getElementById('generate-pin').addEventListener('click', function () {
//     const emptyBox = document.getElementById('empty-box');
//     const randomRound = Math.round(Math.random() * 10000);
//     console.log(randomRound);
//     emptyBox.value = randomRound;


//     if ((randomRound + '').length == 4) {
//         return randomRound;
//     }
//     else {
//         return;
//     }

// })
function generatePin() {
    const randomRound = Math.round(Math.random() * 10000);
    console.log(randomRound);
    const emptyBox = document.getElementById('empty-box');
    emptyBox.value = randomRound;
    if ((randomRound + '').length == 4) {
        return randomRound;
    }
    else generatePin();
}

document.getElementById('calculator-click').addEventListener('click', function (event) {
    const formBox = document.getElementById('form-box');
    const evenTarget = event.target.innerText;
    if (isNaN(evenTarget)) {
        if (evenTarget == 'C') {
            formBox.value = '';
        }

    }

    else {
        const formBoxValue = formBox.value;
        const newNumber = formBoxValue + evenTarget;
        formBox.value = newNumber;


        console.log(evenTarget);
    }


})

document.getElementById('submit').addEventListener('click', function () {

    const formBox = document.getElementById('form-box').value;
    const emptyBox = document.getElementById('empty-box').value;
    const matched = document.getElementById('matched');
    const notMatched = document.getElementById('not-matched');
    if (formBox == emptyBox) {

        matched.style.display = 'block';
        notMatched.style.display = 'none';
    }
    else {
        matched.style.display = 'none';
        notMatched.style.display = 'block';
    }
})