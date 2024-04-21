
// Questions database (ideally this would be imported)

questionsDB = [
    { category : 'science',
      question : `How many cells in the human body? <br> (in millions)`,
      answerArray : [10, 50, 100, 1000, 10000, 40000, 100000],
      correctAnswerIndex : 5
    },
    { category : 'science',
      question : `How many sand grains are on Earth? <br> (in sextillions)`,
      answerArray : [1, 3, 5, 7, 10, 50, 100],
      correctAnswerIndex : 3
    },
    { category : 'sports',
      question : `How many times did Real Madrid win UEFA champions league?`,
      answerArray : [1, 3, 5, 7, 10, 20, 50],
      correctAnswerIndex : 3
    }, 
    { category : 'history',
      question : `How many paintings did Picasso produce?`,
      answerArray : [1, 3, 5, 7, 10, 20, 50],
      correctAnswerIndex : 3
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

    // home page does not have the slider object and so `slider` will be null
    if (slider != null) {
      // Default value is printed in the output paragraph unless changed by the user
      output.innerHTML = `Your choice: ${questionsDB[0]['answerArray'][slider.value]}`;
      minValue.innerHTML = questionsDB[0]['answerArray'][0].toLocaleString(); // write it in a readable format
      maxValue.innerHTML = questionsDB[0]['answerArray'][6].toLocaleString(); // write it in a readable format

      slider.addEventListener('input', function() {
          output.innerHTML = `Your choice: ${questionsDB[0]['answerArray'][slider.value].toLocaleString()}`;
      
      })

      displayQuestion()
    
    }

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
    let randomNum = Math.floor(Math.random() * 2);
    let question = document.getElementById('question');
    question.innerHTML = `<h2> ${fetchQuestions()[randomNum]['question']} </h2>`;
}




function checkAnswer() {

}


function incrementScore() {

}


