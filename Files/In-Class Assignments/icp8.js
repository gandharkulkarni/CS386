window.addEventListener("submit", fSubmit);
function fSubmit(){
    fRadioButtons();
    fTextInputs();
}
function fRadioButtons(){
    // alert("fRadioButtons");
    let childElements = document.forms[0];
    let len = childElements.length;
    for(let i=0; i<len; i++){
        if(childElements[i].name==="gender"){
            if(childElements[i].checked===true){
                alert(`Gender value selected = ${childElements[i].value}`);
            }
        }
    }
    
}
function fTextInputs(){
    // alert("fTextInputs");
    let txtInputs = document.querySelectorAll('input[type="text"]');
    let len = txtInputs.length;
    let fullName = "";
    for(let i=0; i<len;i++){
        if(txtInputs[i].name=="fName" || txtInputs[i].name=="lName"){
            fullName += txtInputs[i].value + " ";
        }
    }
    alert(`Full name: ${fullName}`);
}