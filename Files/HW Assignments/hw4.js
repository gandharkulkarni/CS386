window.addEventListener("DOMContentLoaded",fLoad);

function fLoad(){
  let loginButton = document.getElementById('btnLogin');
  loginButton.addEventListener('click', fValidation);

  let resetButton = document.getElementById('btnReset');
  resetButton.addEventListener('click', fReset);
}
function fValidation(){
    const inputs = document.querySelectorAll('input[type="text"]');
    let len = inputs.length;
    for(let i=0; i<len;i++){
        if (inputs[i].value.length === 0) {
            inputs[i].style.backgroundColor = 'red';
        } else {
            inputs[i].style.backgroundColor = 'green';
        }
    }
}

function fReset(){
    const inputs = document.querySelectorAll('input[type="text"]');
    let len = inputs.length;
    for(let i=0; i<len;i++){
        inputs[i].style.backgroundColor = '';
        inputs[i].value = '';
    }
}