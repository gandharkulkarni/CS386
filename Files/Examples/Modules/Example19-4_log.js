const log= {
    info: function (pInfo){
        console.log("Info: "+pInfo)
    },
    warning: function(pWarning){
        console.log("warning: "+pWarning)
    },
    error: function(pError){
        console.log("error: "+pError)
    }
};

module.exports= log;