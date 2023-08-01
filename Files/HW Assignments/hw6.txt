const express = require('express');
const HOST = 'localhost';
const PORT = 7000;

const dataJSON = require('./data/dataJSON')
const dataCSV = require('./data/dataCSV')

let html_top = 
`
<!DOCTYPE html>
<html>
<head>
    <title>HW 6</title>
    <meta charset="utf-8" />
</head>
<body>
`

let html_bottom = 
`
</body>
</html>
`

const app = express();

//Main page
app.get('/',(req, res)=>{
    let strHTML = '<h1>Homework 6</h1><hr>';
    strHTML += '<br><p>To View or Download JSON data</p>';
    strHTML += '<br><a href= \'/view-json\' target=\'_blank\'>View JSON</a> &nbsp; <a href= \'/json\' target=\'_blank\'>Download JSON</a>';
    strHTML += '<br><p>To View or Download CSV data </p>';
    strHTML += '<br><a href= \'/view-csv\' target=\'_blank\'>View CSV</a> &nbsp; <a href= \'/csv\' target=\'_blank\'>Download CSV</a>';
    res.status(200).send(html_top+strHTML+html_bottom);
});

//View JSON
app.get('/view-json', (req,res)=>{
    res.status(200).json(dataJSON);
});

//View CSV
app.get('/view-csv', (req,res)=>{
    res.status(200).set('content-type','text/html').send(dataCSV.replaceAll('\n','<br>'));
});

//Download JSON
app.get('/json', (req,res)=>{
    res.status(200).set('content-disposition','attachment; filename=dataJSON.json');
    res.set('content-type','application/json');
    res.send(dataJSON);
});

//Download CSV
app.get('/csv', (req,res)=>{
    res.status(200).set('content-disposition','attachment; filename=dataCSV.csv');
    res.set('content-type','application/csv');
    res.send(dataCSV);
});



//404 Handler
app.use((req, res, next)=>{
    res.status(404).send('<h1>404 Not found</h1>');
});

// 500 Handler
app.use((error,req, res, next) => {
    res.status(500).send('<h1>505 Internal server error</h1>');
});

//Server 
const server = app.listen(PORT, HOST, ()=>{
    console.log(`Server started listening on ${PORT} port`);
});
