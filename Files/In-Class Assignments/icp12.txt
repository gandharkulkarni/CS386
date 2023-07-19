//Add event on load
window.addEventListener('load',fLoad);

//Function for load event
function fLoad(){
    //Get button
    let btnSend = document.getElementById('btnSend');
    //Add event listener for click event
    btnSend.addEventListener('click',fAJAX);
}

//Function to handle button click event 
function fAJAX(){
    // alert('fAJAX');
    //Get text area
    let txtResult = document.getElementById('txtResult');
    //Reset text area content
    txtResult.value = '';
    
    let xhr = new XMLHttpRequest();

    //Get selected option in drop down
    let selectedOption = document.getElementById('ddlCategory').value;

    //Create url
    let url = `https://v2.jokeapi.dev/joke/${selectedOption}?safe-mode&type=single`;

    xhr.open('GET',url+selectedOption);

    //Send request
    xhr.send();

    //Load event listener
    xhr.addEventListener('load',function(){
        //If error status 
        if(xhr.status!==200){
            console.log(`Error ${xhr.status} : ${xhr.statusText}`);
        }
        //If success status
        else{
            console.log(xhr.status);
            console.log(xhr.response);
            let result = JSON.parse(xhr.response);
            //If single line joke
            if( result.joke !==undefined){
                //Set text area value
                txtResult.value = result.joke;
            }
            //If multiline joke
            else{
                //Set text area value
                txtResult.value = result.setup + " " +result.delivery;
            }
        }
    });
}