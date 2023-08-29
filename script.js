const question = document.querySelector('.question');
const square = document.querySelectorAll('.square');
const diffBtn = document.querySelector('.difficulty');
const helpRow = document.querySelectorAll('.row-no');
const helpCol = document.querySelectorAll('.col-no');
const origin = document.querySelector('.origin');
const score = document.querySelector('.score');
let clickNumber = 0;
let correct = 0;

function randomQuestion() {
    let digit1 = Math.floor(Math.random() * 8) + 1;
    const digit2 = Math.floor(Math.random() * 8) + 1;
    switch (digit1) {
        case 1:
            digit1 = 'a';
            break;
        case 2:
            digit1 = 'b';
            break;
        case 3:
            digit1 = 'c';
            break;
        case 4:
            digit1 = 'd';
            break;
        case 5:
            digit1 = 'e';
            break;
        case 6:
            digit1 = 'f';
            break;
        case 7:
            digit1 = 'g';
            break;
        case 8:
            digit1 = 'h';
            break;
        default:
            break;
    }
    question.innerHTML = String(digit1) + digit2;
}

function correctAnswer(squareId) {
    correct++;
    squareId.classList.toggle('green');
    setTimeout(() => {
        squareId.classList.toggle('green');
    }, 1000);
}

function wrongAnswer(squareId) {
    squareId.classList.toggle('red');
    setTimeout(() => {
        squareId.classList.toggle('red');
    }, 1000);
}

for (let i = 0; i < square.length; i++) {
    square[i].addEventListener('click', function() {
        clickNumber++;
        const squareId = document.getElementById(square[i].id);
        console.log(squareId);
        console.log(square[i].id);
        console.log(question.innerHTML);
        if (square[i].id===question.textContent) {
            correctAnswer(squareId);
            randomQuestion();
        } else {
            wrongAnswer(squareId);
        }
        score.textContent = correct+" / "+clickNumber+" = "+(correct/clickNumber*100).toFixed(2)+"%";
    });
};

diffBtn.addEventListener('click', ()=>{
    setDifficulty(diffBtn.textContent);
})

function setDifficulty(mode) {
    if (mode==='EASY') {
        for (let i = 0; i < helpRow.length; i++) {
            helpRow[i].innerHTML = helpRow[i].id;
            helpCol[i].innerHTML = helpCol[i].id;
            origin.innerHTML = origin.id;
        }
        for (let j = 0; j < square.length; j++) {
            square[j].innerHTML = square[j].id;
        }
        diffBtn.textContent = 'HARD';
    } else {
        for (let i = 0; i < helpRow.length; i++) {
            helpRow[i].innerHTML = '';
            helpCol[i].innerHTML = '';
            origin.innerHTML = '';
        }
        for (let j = 0; j < square.length; j++) {
            square[j].innerHTML = "";
        }
        diffBtn.textContent = 'EASY';
    }
}