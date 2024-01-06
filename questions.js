const answersList = document.querySelectorAll('ol.answers li');

function checkClickedAnswer(event) {
    const clickedAnswerElement = event.currentTarget;
    console.log(clickedAnswerElement.dataset.answer);

    const selectedAnswer = `A`;
    const correctAnswer = `B`;
    let message;
    let answerColorCode;
    if (selectedAnswer === correctAnswer) {
        message = `正解です！おめでとう`
        answerColorCode = ``            
    } else {
        message = `残念！不正解です！`
        answerColorCode = `#f05959`            
    }
    alert(message);
    document.querySelector('span#correct-answer').style.color = answerColorCode;
    document.querySelector('div#section-correct-answer').style.display = `block`;
}

answersList.forEach((li) => {li.addEventListener(`click`, checkClickedAnswer)});














// const weight = 58;
// const height = 1.65;
// const bmi = weight / (height ** 2);
// console.log(bmi);


// function calculateBmi() {
//     const weight = 58;
//     const height = 1.65;
//     const bmi = weight / (height ** 2);
//     return bmi
// }


// function calculateBmi(weight, height) {
//     return weight / (height ** 2);
// }

// bmi = calculateBmi(62, 1.67);

// if (bmi < 18.5) {
//     console.log(`痩せすぎです`, bmi);    
// } else if (bmi >= 25.0) {
//     console.log(`太りすぎです`, bmi);    
// } else {
//     console.log(`普通です`, bmi);
// }

// function showAlert() {
//     alert(`クリックしました`);
// }

// document.querySelector(`li`).addEventListener(`click`, showAlert)


