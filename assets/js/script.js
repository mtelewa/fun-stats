
// Questions database

questions_database = [
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

    let slider = document.getElementById('slider');
    let output = document.getElementById('chosen-value');
    // Default value is printed in the output paragraph unless changed by the user
    output.innerHTML = `Your choice: ${values[slider.value]}`
    slider.addEventListener('input', function() {
        output.innerHTML = `Your choice: ${values[slider.value]}`;
    })

})



function displayQuestion() {
    
}


function runGame() {

}


function checkAnswer() {

}


function incrementScore() {

}


