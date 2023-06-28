window.addEventListener("DOMContentLoaded",fLoad);


//Function for Load event
function fLoad(){
    //Get login button
    let loginButton = document.getElementById('btnLogin');
    loginButton.addEventListener('click', fValidation);

    //Get reset button
    let resetButton = document.getElementById('btnReset');
    resetButton.addEventListener('click', fReset);
}

//Function for login btn click event and validation
function fValidation(){
    //Select all text input
    const inputs = document.querySelectorAll('input[type="text"]');
    let len = inputs.length;
    for(let i=0; i<len;i++){
        //If value not provided set background color to red else green
        if (inputs[i].value.length === 0) {
            inputs[i].style.backgroundColor = 'red';
        } else {
            inputs[i].style.backgroundColor = 'green';
        }
    }
}

//Function for reset button click event
function fReset(){
    //Select all text input
    const inputs = document.querySelectorAll('input[type="text"]');
    let len = inputs.length;
    for(let i=0; i<len;i++){
        //Reset background color and value
        inputs[i].style.backgroundColor = '';
        inputs[i].value = '';
    }
}