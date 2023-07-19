let xhr = new XMLHttpRequest();

xhr.open('GET','https://the-one-api.dev/v2/book');

xhr.send();

xhr.addEventListener('load',function(){
    if(xhr.status!=200){
        console.log(`Error ${xhr.status} : ${xhr.statusText}`);
    }
    else{
        console.log(xhr.response);
        document.body.append(`${xhr.response}`);
    }
});

xhr.addEventListener('error',function(){
    console.log('Request failed');
});
