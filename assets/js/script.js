
// Questions database (ideally this would be imported)

const questionsDB = [
    { id : 1,
      category : 'science',
      question : `How many cells in the human body? <br> (in millions)`,
      answerArray : [10, 50, 100, 1000, 10000, 40000, 100000],
      correctAnswerIndex : 5
    },
    { id : 2,
      category : 'science',
      question : `How many sand grains are on Earth? <br> (in sextillions)`,
      answerArray : [1, 3, 5, 7, 10, 50, 100],
      correctAnswerIndex : 3
    },
    { id : 3,
      category : 'sports',
      question : `How many times did Real Madrid win UEFA champions league?`,
      answerArray : [1, 3, 5, 7, 10, 20, 50],
      correctAnswerIndex : 3
    }, 
    { id : 4,
      category : 'history',
      question : `How many paintings did Picasso produce?`,
      answerArray : [3, 4, 9, 12, 17, 20, 50],
      correctAnswerIndex : 3
    },
    { id : 5,
      category : 'arts',
      question : `How many paintings did Picasso produce?`,
      answerArray : [3, 4, 9, 12, 17, 20, 50],
      correctAnswerIndex : 3
    },     
    { id : 6,
      category : 'science',
      question : `How many?`,
      answerArray : [1, 3, 5, 7, 10, 50, 100],
      correctAnswerIndex : 3
    },
    { id : 7,
      category : 'science',
      question : `How much?`,
      answerArray : [1, 3, 5, 7, 10, 20, 50],
      correctAnswerIndex : 3
    }, 
]   

// generate a random number array based on the shuffle function
for (var numArray=[], i=0 ; i<3 ; ++i) numArray[i]=i;
let randomNumArray = shuffle(numArray);


/* wait for the DOM to finish loading before running the quiz
Add event listener to the user input*/

document.addEventListener("DOMContentLoaded", function() {

    let slider = document.getElementById('slider');
    let submitButton = document.getElementById('submit-button');

    let entry = displayQuestion(0)

    // home page does not have the slider object and so `slider` will be null
    if (slider != null) {

      // focus on slider when page is loaded
      slider.focus();

      // slider and button eventlisteners

      // event handler: submit the answer when the Enter key is pressed while the user is on the slider
      slider.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
          checkAnswer(entry);
          for (i=1; i<randomNumArray.length ;i++) {
            displayQuestion(i);
            checkAnswer(displayQuestion(i));
          }
        }
      })

      // submit the answer when the user clicks the submit button
      submitButton.addEventListener('click', function() {
          checkAnswer(entry);
          for (i=1; i<randomNumArray.length ;i++) {
            displayQuestion(i);
            checkAnswer(displayQuestion(i));
          }
      })

    }

})



/**
 * create a random number array between 0 and 19. The array length is the same as the number of questions in each category, N = 20
 * The array has only unique numbers (no repeats).
 * adapted from: https://stackoverflow.com/questions/5836833/create-an-array-with-random-values 
 */
function shuffle(array) {
    var tmp, current, top = array.length;
    if (top) while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }

    return array;
}


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
 * select an entry from the categoryQuestions array based on a random number 
 * @returns the entry dictionary
 */
function fetchQuestionEntry(index) {
    
    let entry = fetchQuestions()[index]     // the chosen entry from the category questions array (it is a dicitonary object) 
    
    let question = entry['question']
    let outQuestion = document.getElementById('question');
    outQuestion.innerHTML = `<h2> ${question} </h2>`;

    return entry
}


/**
 * prints the answer range to the question created from displayQuestion function
 * and records the user answer and sends to be checked to the checkAnswer function
 * @returns the integer index of the user's answer. The index is used in the answersArray
 */
function displayQuestion(index) {
    
    let entry = fetchQuestionEntry(randomNumArray[index]);

    // Min, max and user-chosen values
    let outChosen = document.getElementById('chosen-value');
    let outMin = document.getElementById('min-value');
    let outMax = document.getElementById('max-value');

    let answersRange = entry['answerArray'];

    // default value is printed in the output paragraph unless changed by the user
    outChosen.innerHTML = `Your choice: ${answersRange[slider.value]}`;
    outMin.innerHTML = answersRange[0].toLocaleString(); // write it in a readable format
    outMax.innerHTML = answersRange[6].toLocaleString(); // write it in a readable format

    // log the user's chosen value to the page as they move the slider
    slider.addEventListener('input', function() {
      outChosen.innerHTML = `Your choice: ${answersRange[slider.value].toLocaleString()}`;      
    })
    
    return entry

}



function checkAnswer(entry) {

    // home page does not have the slider object and so `slider` will be null
    if (slider != null) {
      let userAnswerIndex = parseInt(document.getElementById('slider').value)
      let correctAnswerIndex = entry['correctAnswerIndex'];

      if (userAnswerIndex === correctAnswerIndex) {
        incrementScore(3)         // increment score by 3 points
      } else if (userAnswerIndex === correctAnswerIndex+1 || userAnswerIndex === correctAnswerIndex-1) {
        incrementScore(1)         // increment score by 1 point
      } else {                    // show the modal

        var modal = document.getElementById("myModal");
        modal.style.display = "block";
        // get the <span> element that closes the modal
        var closeModal = document.getElementsByClassName("close")[0];
        // when the user clicks on <span> (x), close the modal
        closeModal.onclick = function() {
          modal.style.display = "none";
        }
        // when the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
      }
    }
    
}


function incrementScore(points) {
    console.log(points)
    let oldScore = parseInt(document.getElementById("score-value").innerHTML);
    let newScore = oldScore + points;
    
    document.getElementById("score-value").innerHTML = newScore;
    document.getElementById('final-score').innerHTML = `Your Score is ${newScore}`


}


