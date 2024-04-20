// questions_database = [

// ]





const values = [1, 3, 5, 10, 20, 50, 100];


/* Wait for the DOM to finish loading before running the quiz
Add event listener to the user input*/

document.addEventListener("DOMContentLoaded", function() {

    let slider = document.getElementById('slider');
    let output = document.getElementById('chosen-value');
    output.innerHTML = `Your choice: ${values[slider.value]}`
    slider.addEventListener('input', function() {
        output.innerHTML = `Your choice: ${values[slider.value]}`;
    })
    


})
