
// Questions database

questionsDB = [
    { category : 'science',
      question : `How many cells in the human body? <br> (in millions)`,
      answerList : [10, 50, 100, 1000, 10000, 40000, 100000],
      correctAnswer : 40000
    },
    { category : 'science',
      question : `How many sand grains on Earth? <br> (in sextillions)`,
      answerList : [1, 3, 5, 7, 10, 50, 100],
      correctAnswer : 7
    }
]




/* Wait for the DOM to finish loading before running the quiz
Add event listener to the user input*/

document.addEventListener("DOMContentLoaded", function() {

    // Print min, max and user-chosen values
    let slider = document.getElementById('slider');
    let output = document.getElementById('chosen-value');
    let minValue = document.getElementById('min-value');
    let maxValue = document.getElementById('max-value');

    // Default value is printed in the output paragraph unless changed by the user
    output.innerHTML = `Your choice: ${questionsDB[0]['answerList'][slider.value]}`;
    minValue.innerHTML = questionsDB[0]['answerList'][0].toLocaleString(); // write it in a readable format
    maxValue.innerHTML = questionsDB[0]['answerList'][6].toLocaleString(); // write it in a readable format

    slider.addEventListener('input', function() {
        output.innerHTML = `Your choice: ${questionsDB[0]['answerList'][slider.value].toLocaleString()}`;
    
    })

})




function displayQuestion(id) {
    let question = document.getElementById('question');
    question.innerHTML = `<h2> ${questionsDB[0]['question']} </h2>`;
}


function runGame() {

}


function checkAnswer() {

}


function incrementScore() {

}


