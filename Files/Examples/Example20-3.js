const DELAY = 3;

function fDelay(pDuration){
    let dtStart = new Date();
    console.log(`Start = ${dtStart}`);
    let dtNow = dtStart;
    while (dtNow-dtStart<pDuration*1000){
        dtNow = new Date();
    }
    console.log(`End = ${dtNow}`);
}

fDelay(5);