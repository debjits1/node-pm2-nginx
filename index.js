var express = require('express');
var fs = require('fs');
var port = process.env.port || 6500;

var app = express();
app.listen(port, () => {
    console.log('Listening to port ' + port);
});

app.get('/', (req, res) => {
    res.send('<h1>Welcome to express server</h1>')
});

app.get('/users', (req, res) => {
    fs.readFile('users.json', (err, data) => {
        if(err){
            throw err;
        }
        console.log(data);
        let userData = JSON.parse(data);
        res.send(userData);
    });
});