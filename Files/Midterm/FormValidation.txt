window.addEventListener('load',function(){
    //Add click event to Login button
    let btnLogin = document.getElementById('btnLogin');
    btnLogin.addEventListener('click',fValidate);

    //Add click event to reset button
    let btnReset = document.getElementById('btnReset');
    btnReset.addEventListener('click', fReset);
});
function fValidate(evt){
    // console.log('fValidate');
    //select all input type=text
    const inputs = document.querySelectorAll('input[type="text"]');
    //select all span element
    const spans = document.querySelectorAll('span');
    let validationSuccess = true;
    let len = inputs.length;
    //Loop over all txt input elements
    for(let i=0; i<len;i++){
        //If lenght is less than 8 or greater than 20
        if (inputs[i].value.length < 8 || inputs[i].value.length > 20) {
            //Set background color to red
            inputs[i].style.backgroundColor = 'red';
            //Set error message
            spans[i].innerHTML = 'Atleast 8 and at most 20 characters';
            //Set validation flag to false
            validationSuccess = false;
        }
        else{
            //Reset background color
            inputs[i].style.backgroundColor = '';
            //Reset validation message
            spans[i].innerHTML = 'Validation messages';
        }
    }
    if(validationSuccess===false){
        //Prevent form from submitting
        evt.preventDefault();
        //Show alert
        alert('Form validation failed');
    }
}
function fReset(){
    // console.log('fReset');
    //Select all txt input
    const inputs = document.querySelectorAll('input[type="text"]');
    //Select all span elements
    const spans = document.querySelectorAll('span');
    let len = inputs.length;
    //Loop over all txt input elements
    for(let i=0; i<len;i++){
        //Reset background color
        inputs[i].style.backgroundColor = '';
        //Reset value
        inputs[i].value = '';
        //Reset message
        spans[i].innerHTML = 'Validation messages';
    }
}