
// Questions database (ideally this would be imported)

const questionsDB = [
    { id : 0,
      category : 'science',
      question : `How many cells in the human body? <br> (in millions)`,
      answerArray : [10, 50, 100, 1000, 10000, 40000, 100000],
      correctAnswerIndex : 5
    },
    { id : 1,
      category : 'science',
      question : `How many sand grains are on Earth? <br> (in sextillions)`,
      answerArray : [1, 3, 5, 7, 10, 50, 100],
      correctAnswerIndex : 3
    },
    { id : 2,
      category : 'sports',
      question : `How many times did Real Madrid win UEFA champions league?`,
      answerArray : [1, 3, 5, 7, 10, 20, 50],
      correctAnswerIndex : 3
    }, 
    { id : 3,
      category : 'history',
      question : `How many paintings did Picasso produce?`,
      answerArray : [3, 4, 9, 12, 17, 20, 50],
      correctAnswerIndex : 3
    },
    { id : 4,
      category : 'arts',
      question : `How many paintings did Picasso produce?`,
      answerArray : [3, 4, 9, 12, 17, 20, 50],
      correctAnswerIndex : 3
    }
]




/* Wait for the DOM to finish loading before running the quiz
Add event listener to the user input*/

document.addEventListener("DOMContentLoaded", function() {

    displayQuestion()
    displayAnswer()
    fetchUserAnswer()


})




// function displayQuestion(id) {

// }


/**
 * masks the database to omit the entries that do not have the category in question 
 * @returns an array of objects containing only a cetain category as the value.
 */

function fetchQuestions() {
    // get the category from the page header of the current page
    let category = document.getElementById('category-header').innerHTML
    let categoryQuestions = []

    // build science questions array
    if (category.includes('Science')) {
      // loop over the Database object
      for (let i of questionsDB) {
        // pick the entries in the object with a certain category
        if (Object.values(i).includes('science')) {
          categoryQuestions.push(i)
        }
      }
    } else if (category.includes('Sports')) {
      for (let i of questionsDB) {
        if (Object.values(i).includes('sports')) {
          categoryQuestions.push(i)
        }
      }      
    } else if (category.includes('History')) {
      for (let i of questionsDB) {
        if (Object.values(i).includes('history')) {
          categoryQuestions.push(i)
        }
      }      
    } else if (category.includes('Arts')) {
      for (let i of questionsDB) {
        if (Object.values(i).includes('arts')) {
          categoryQuestions.push(i)
        }
      }      
    }
    
    return categoryQuestions

}


/**
 * prints the question to the screen based on an integer random number from 1 to 30
 */
function displayQuestion() {
    let randomNum = Math.floor(Math.random() * 0);
    let question = document.getElementById('question');

    question.innerHTML = `<h2> ${fetchQuestions()[randomNum]['question']} </h2>`;

    return randomNum
}


/**
 * prints the answers range to the screen based on the random number created from displayQuestion function
 */
function displayAnswer() {
    // Min, max and user-chosen values
    let slider = document.getElementById('slider');
    // focus on slider when page is loaded
    slider.focus();

    let outChosen = document.getElementById('chosen-value');
    let outMin = document.getElementById('min-value');
    let outMax = document.getElementById('max-value');

    let randomNumberGenerated = displayQuestion();
    let answersRange = fetchQuestions()[randomNumberGenerated]['answerArray'];

    // home page does not have the slider object and so `slider` will be null
    if (slider != null) {
      // default value is printed in the output paragraph unless changed by the user
      outChosen.innerHTML = `Your choice: ${answersRange[slider.value]}`;
      outMin.innerHTML = answersRange[0].toLocaleString(); // write it in a readable format
      outMax.innerHTML = answersRange[6].toLocaleString(); // write it in a readable format

      slider.addEventListener('input', function() {
          outChosen.innerHTML = `Your choice: ${answersRange[slider.value].toLocaleString()}`;
      
      })

      let userAnswerIndex = slider.value

      slider.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
          console.log('submit pressed')
        }
      })
      
    return userAnswerIndex
    }

}


function fetchUserAnswer() {
    let submitButon = document.getElementById('submit-button')
    
    submitButon.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        console.log('submit pressed')
      }
    })
    
}



function checkAnswer() {

}


function incrementScore() {

}


