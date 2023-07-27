const express = require('express')

const app = express();

app.use(req, res, next, function(){
    console.log(req.url);
    console.log(new Date().toLocaleDateString());
    next();
})

app.get('/', function(req, res){
    res.send('<h1>Express Server</h1>');
})

app.listen(3000,'localhost', function(){
    console.log('Server started on port 3000');
})