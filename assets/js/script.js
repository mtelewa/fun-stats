// questions_database = [

// ]





const values = [1, 3, 5, 10, 20, 50, 100];



function printValue(event) {
    let slider = document.getElementById('slider');
    let output = document.getElementById('chosen-value');
    output.innerHTML = `Your choice: ${values[slider.value]}`;
}




slider.addEventListener('input', printValue)