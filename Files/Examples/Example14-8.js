window.addEventListener('load',function(){
    let textArea = this.document.getElementsByTagName('textarea')[0];
    this.document.body.addEventListener('click', function(event){fEvent(event, textArea)});
});
function fEvent(event, textArea){
    textArea.cols = 50;
    textArea.rows = 4;
    let strOutput = "Elements passed = "+ textArea.tagName + "\n";
    strOutput += `X = ${event.clientX} Y = ${event.clientY}`;
    textArea.value = strOutput;
}