fProcess();
function fProcess(){
    console.log('Start: '+ Date());
    setTimeout(fDelay,3000);
    console.log('End: '+ Date());
}
function fDelay(){
    console.log('Completed: '+ Date());
}