const url = require('url');

let sampleURL = 'http://user:pass@host.com:8080/p/a/t/h?par1=val1&par2=val2#hash'
let objURL = url.parse(sampleURL);

for(attr in objURL){
    if(typeof(objURL[attr]) !=='function'){
        console.log(`${attr} = ${objURL[attr]}`);
    }
}