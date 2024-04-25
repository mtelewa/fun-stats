
// Questions database (ideally this would be imported)
const questionsDB = [
  { category: 'science',
    question: "How many cells are there in the human body?",
    answerArray: ["1 million", "30 million",  "50 million", "100 million", "1 trillion", "30 trillion", "50 trillion"],
    correctAnswerIndex: 5
  },
  { category: 'science',
    question: "What is the estimated number of stars in the Milky Way galaxy?",
    answerArray: ["100 million", "1 billion", "100 billion", "1 trillion", "100 trillion", "1 quadrillion", "100 quadrillion"],
    correctAnswerIndex: 2
  },
  { category: 'science',
    question: "How many Earths could fit inside the sun?",
    answerArray: ["100", "1000", "1 million", "1 billion", "1 trillion", "1 quadrillion", "1 quintillion"],
    correctAnswerIndex: 3
  },
  { category: 'science',
    question: "What percentage of the Earth's surface is covered by water?",
    answerArray: ["10%", "25%", "50%", "60%", "70%", "85%", "90%"],
    correctAnswerIndex: 4
  },
  { category: 'science',
    question: "How many species of insects are there on Earth?",
    answerArray: ["10,000", "100,000", "1 million", "10 million", "100 million", "1 billion", "10 billion"],
    correctAnswerIndex: 3
  },
  { category: 'science',
    question: "What is the estimated age of the universe in years?",
    answerArray: ["10 million", "100 million", "1 billion", "10 billion", "100 billion", "1 trillion", "10 trillion"],
    correctAnswerIndex: 6
  },
  { category: 'science',
    question: "How many neurons are there in the human brain?",
    answerArray: ["1 million", "10 million", "100 million", "1 billion", "10 billion", "100 billion", "1 trillion"],
    correctAnswerIndex: 5
  },
  { category: 'science',
    question: "What percentage of the universe is composed of dark matter?",
    answerArray: ["25%", "35%", "45%", "65%", "75%", "85%", "95%"],
    correctAnswerIndex: 5
  },
  { category: 'science',
    question: "There is a huge number of atoms in a single grain of sand, how many zeros in that number?",
    answerArray: ["4", "8", "12", "16", "20", "24", "28"],
    correctAnswerIndex: 6
  },
  { category: 'science',
    question: "What percentage of the human body is made up of water?",
    answerArray: ["30%", "40%", "50%", "60%", "70%", "80%", "90%"],
    correctAnswerIndex: 3
  },
  {
    category: 'science',
    question: "What is the approximate speed of light in a vacuum? (in meters per second)",
    answerArray: ["300,000", "1 million", "3 million", "10 million", "30 million", "300 million", "1 trillion"],
    correctAnswerIndex: 5
  },
  {
    category: 'science',
    question: "What percentage of the universe is made up of hydrogen?",
    answerArray: ["10%", "25%", "50%", "75%", "85%", "90%", "95%"],
    correctAnswerIndex: 3
  },
  {
    category: 'science',
    question: "How many bones are there in the adult human body?",
    answerArray: [20, 50, 80, 150, 200, 300, 350],
    correctAnswerIndex: 4
  },
  {
    category: 'science',
    question: "What is the boiling point of water in Celsius?",
    answerArray: ["50", "100", "150", "200", "250", "300", "350"],
    correctAnswerIndex: 1
  },
  {
    category: 'science',
    question: "How many planets are there in our solar system?",
    answerArray: [6, 8, 9, 10, 12, 15, 20],
    correctAnswerIndex: 1
  },
  {
    category: 'science',
    question: "What percentage of the Earth's atmosphere is made up of oxygen?",
    answerArray: ["20%", "30%", "40%", "50%", "60%", "70%", "80%"],
    correctAnswerIndex: 0
  },
  {
    category: 'science',
    question: "How many moons does Jupiter have?",
    answerArray: [1, 10, 50, 100, 200, 500, 1000],
    correctAnswerIndex: 3
  },
  {
    category: 'science',
    question: "What is the approximate diameter of the Earth in kilometers?",
    answerArray: ["1,000", "4,000", "6,000", "12,000", "16,000", "20,000", "40,000"],
    correctAnswerIndex: 3
  },
  {
    category: 'science',
    question: "What is the pH of pure water at room temperature?",
    answerArray: ["0", "3", "5", "7", "9", "11", "14"],
    correctAnswerIndex: 3
  },
  {
    category: 'science',
    question: "How many chromosomes are there in a human somatic cell?",
    answerArray: [23, 46, 69, 92, 115, 138, 214],
    correctAnswerIndex: 1
  },
  { category: 'arts',
    question: "What was the cost of the most expensive painting ever sold at auction?",
    answerArray: ["$350 million", "$450 million", "$500 million", "$600 million", "$750 million", "$800 million", "$1 billion"],
    correctAnswerIndex: 1
  },
  { category: 'arts',
    question: "How many paintings did Vincent van Gogh sell during his lifetime?",
    answerArray: ["1", "5", "10", "20", "50", "100", "200"],
    correctAnswerIndex: 0
  },
  { category: 'arts',
    question: "What percentage of the world's art is estimated to be forged?",
    answerArray: ["5%", "10%", "20%", "30%", "40%", "50%", "60%"],
    correctAnswerIndex: 4
  },
  { category: 'arts',
    question: "How many art pieces are estimated to be stored in the Louvre Museum?",
    answerArray: ["10,000", "50,000", "100,000", "200,000", "400,000", "500,000", "1 million"],
    correctAnswerIndex: 5
  },
  { category: 'arts',
    question: "What percentage of public art in the United States is by women artists?",
    answerArray: ["5%", "10%", "15%", "20%", "25%", "30%", "40%"],
    correctAnswerIndex: 1
  },
  { category: 'arts',
    question: "What percentage of art sales are estimated to occur online?",
    answerArray: ["5%", "10%", "20%", "30%", "40%", "50%", "60%"],
    correctAnswerIndex: 2
  },
  { category: 'arts',
    question: "How many museums are there in the UK?",
    answerArray: ["500", "800", "1,000", "1,400", "1,800", "3,000", "4,000"],
    correctAnswerIndex: 4
  },
  { category: 'arts',
    question: "How many art galleries and museums are there in Paris, France?",
    answerArray: ["100", "200", "300", "400", "500", "600", "750"],
    correctAnswerIndex: 0
  },
  { category: 'arts',
    question: "What is the estimated value of the global art market?",
    answerArray: ["$1 billion", "$10 billion", "$20 billion", "$40 billion", "$60 billion", "$100 billion", "$1 trillion"],
    correctAnswerIndex: 4
  },
  { category: 'arts',
    question: "What is the highest-grossing movie of all time worldwide (in billions of dollars)?",
    answerArray: ["2", "3", "4", "5", "6", "7", "10"],
    correctAnswerIndex: 0
  },
  { category: 'arts',
    question: "What is the length of the longest Hollywood movie (in minutes)?",
    answerArray: ["160", "180", "200", "220", "260", "280", "320"],
    correctAnswerIndex: 5
  },
  { category: 'arts',
    question: "What is the average budget for a Hollywood blockbuster movie (in millions of dollars)?",
    answerArray: ["50", "100", "150", "200", "250", "300", "400"],
    correctAnswerIndex: 1
  },
  { category: 'arts',
    question: "How many Academy Award nominations has Meryl Streep received?",
    answerArray: ["15", "18", "21", "24", "27", "30", "35"],
    correctAnswerIndex: 2
  },
  { category: 'arts',
    question: "What is the total number of movies in the Marvel Cinematic Universe (MCU) as of 2021?",
    answerArray: ["10", "14", "18", "24", "33", "41", "45"],
    correctAnswerIndex: 4
  },
  { category: 'arts',
    question: "What is the average age of an Academy Award winner for Best Actor?",
    answerArray: ["35", "40", "45", "50", "55", "60", "65"],
    correctAnswerIndex: 3
  },
  { category: 'arts',
    question: "How many songs are uploaded to Spotify each day?",
    answerArray: ["10,000", "20,000", "50,000", "100,000", "200,000", "300,000", "400,000"],
    correctAnswerIndex: 3
  },
  { category: 'arts',
    question: "How many people attended the largest concert in history?",
    answerArray: ["1 million", "2 million", "3 million", "4 million", "5 million", "6 million", "10 million"],
    correctAnswerIndex: 3
  },
  { category: 'arts',
    question: "What is the average length of a song in minutes?",
    answerArray: ["1", "2", "4", "6", "8", "10", "12"],
    correctAnswerIndex: 2
  },
  { category: 'arts',
    question: "How much did the best-selling album of all time make (in millions of copies)?",
    answerArray: ["10", "20", "50", "70", "100", "300", "400"],
    correctAnswerIndex: 3
  },
  { category: 'arts',
    question: "What is the estimated value of the global music industry in 2023?",
    answerArray: ["$30 billion", "$100 billion", "$150 billion", "$200 billion", "$250 billion", "$300 billion", "$350 billion"],
    correctAnswerIndex: 0
  },




  

];   


// generate a random number array based on the shuffle function
for (var numArray=[], i=0 ; i<20 ; ++i) numArray[i]=i;      // 20 entries in each category
let randomNumArray = shuffle(numArray);
var entryIndex = 0;


/* wait for the DOM to finish loading before running the quiz
Add event listener to the user input */
document.addEventListener("DOMContentLoaded", function() {

  let slider = document.getElementById('slider');
  
  /* home page does not have the slider object and so `slider` will be null
  this block of code will be only executed for the category pages */
  if (slider != null) {
    // reduce the size of the game rules heading text
    document.getElementById('game-rules-heading').style.fontSize = "30px";
    // focus on slider when page is loaded
    slider.focus();
    // initial game run 
    runQuiz(0);
  }    

});


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
  let category = document.getElementById('category-header').innerHTML;
  let categoryQuestions = [];

  // build science questions array
  if (category.includes('Science')) {
    // loop over the Database object
    for (let i of questionsDB) {
      // pick the entries in the object with a certain category
      if (Object.values(i).includes('science')) {
        categoryQuestions.push(i);
      }
    }
  } else if (category.includes('Sports')) {
    for (let i of questionsDB) {
      if (Object.values(i).includes('sports')) {
        categoryQuestions.push(i);
      }
    }      
  } else if (category.includes('History')) {
    for (let i of questionsDB) {
      if (Object.values(i).includes('history')) {
        categoryQuestions.push(i);
      }
    }      
  } else if (category.includes('Arts')) {
    for (let i of questionsDB) {
      if (Object.values(i).includes('arts')) {
        categoryQuestions.push(i);
      }
    }      
  }
  
  return categoryQuestions;

}


/**
 * select an entry from the categoryQuestions array based on a random number 
 * @returns the entry dictionary
 */
function fetchQuestionEntry(index) {
  var entry = fetchQuestions()[index];     // the chosen entry from the category questions array (it is a dicitonary object) 
  return entry;
}


/**
 * prints the answer range to the question created from displayQuestion function
 * and records the user answer and sends to be checked to the checkAnswer function
 * @returns the integer index of the user's answer. The index is used in the answersArray
 */
function displayQuestion(randomNumArrayIndex) {
    
  let entry = fetchQuestionEntry(randomNumArray[randomNumArrayIndex]);
  let question = entry.question;
  let answersRange = entry.answerArray;
  let correctAnswerIndex = entry.correctAnswerIndex;

  // question, min, max and user-chosen values
  let slider = document.getElementById('slider');
  let outQuestion = document.getElementById('question');
  let outChosen = document.getElementById('chosen-value');
  let outMin = document.getElementById('min-value');
  let outMax = document.getElementById('max-value');

  // default value is printed in the output paragraph unless changed by the user
  outQuestion.innerHTML = `<h2> ${question} </h2>`;
  outChosen.innerHTML = `Your choice: ${answersRange[slider.value].toLocaleString()}`;
  outMin.innerHTML = answersRange[0].toLocaleString(); // write it in a readable format
  outMax.innerHTML = answersRange[6].toLocaleString(); // write it in a readable format

  // log the user's chosen value to the page as they move the slider
  slider.addEventListener('input', function() {
    outChosen.innerHTML = `Your choice: ${answersRange[slider.value].toLocaleString()}`;      
  });
  
  return correctAnswerIndex;

}


/**
 * runs the quiz game by displaying the question and handling event listener events 
 * to trigger the checkAnswer function
 * @param question index 
 */
function runQuiz(index) {
  // display the question
  displayQuestion(index);

  // submit the answer when the user clicks the submit button
  let submitButton = document.getElementById('submit-button');
  submitButton.addEventListener('click', handleSubmitButton);

  // or when the Enter key is pressed while the user is on the slider
  let slider = document.getElementById('slider');
  slider.addEventListener('keydown', handleEnterKey);

}


/**
 * checks the answer provided by the user by comparing the user answer index obtained from the slider value
 * and the correct answer index (obtained from the display question function - by calling it from the entry object)
 * @param question index
 */
function checkAnswer(index) {
  // get correct answer index from the database object
  let correctAnswerIndex = displayQuestion(index);
  let userAnswerIndex = parseInt(document.getElementById('slider').value);
  let slider = document.getElementById('slider');

  if (userAnswerIndex === correctAnswerIndex) {
    incrementScore(3);         // increment score by 3 points
    if (entryIndex < randomNumArray.length-1) {
      entryIndex ++ ;
      slider.value = 3;        // reset slider to the middle
      runQuiz(entryIndex);
    } else {
      endQuizWin();
    }
  } else if (userAnswerIndex === correctAnswerIndex+1 || userAnswerIndex === correctAnswerIndex-1) {
    incrementScore(1);       // increment score by 1 point
    if (entryIndex < randomNumArray.length-1) {
      entryIndex ++ ;
      slider.value = 3;        // reset slider to the middle
      runQuiz(entryIndex);
    } else {
      endQuizWin();
    }
  } else {                    
    endQuizLoss();                // show the modal (game over!)
  }

}


/**
 * increments the score and displays it to the user
 * @param number of points scored - obtained from the checkAnswer function
 */
function incrementScore(points) {
  let oldScore = parseInt(document.getElementById("score-value").innerHTML);
  let newScore = oldScore + points;
  
  document.getElementById("score-value").innerHTML = newScore;
  document.getElementById('final-score').innerHTML = `Your Score is ${newScore}`;

}


/**
 * ends the game (Loss!) by showing a modal window
 */
function endQuizLoss() {
  var modal = document.getElementById("myModal");
  let message = document.getElementById("game-end-message");
  modal.style.display = "block";
  message.innerHTML = "Game Over!";
  // get the <span> element that closes the modal
  var closeModal = document.getElementsByClassName("close")[0];
  // when the user clicks on <span> (x), close the modal
  closeModal.onclick = function() {
    modal.style.display = "none";
    window.location.reload();
  };
  // when the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      window.location.reload();
    }
  };

}


/**
 * ends the game (Win!) by showing a modal window
 */
function endQuizWin() {
  var modal = document.getElementById("myModal");
  let message = document.getElementById("game-end-message");
  modal.style.display = "block";
  message.innerHTML = `Congrats! <br> You've solved all the questions!`;
  // get the <span> element that closes the modal
  var closeModal = document.getElementsByClassName("close")[0];
  // when the user clicks on <span> (x), close the modal
  closeModal.onclick = function() {
    modal.style.display = "none";
    window.location.reload();
  };
  // when the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      window.location.reload();
    }
  };

}


/**
 * handles the enter key event
 * @param {keyboard key down} event 
 */
function handleEnterKey(event) {
  if (event.key === 'Enter') {
    checkAnswer(entryIndex);
  }
}


/**
 * handles the submit button event 
 */
function handleSubmitButton() {
    checkAnswer(entryIndex);
}
