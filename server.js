const express = require('express');  //설치한 library를 참조
const app = express();

app.listen(7777, function() {
    console.log('listening on 7777')
});


app.get('/pet', function(req, res) {
    res.send('pet shoping site');
});

app.get('/beauty', function(req, res) {
    res.send('Wish to leave this bloody country')
});

app.get('/good', function(req, res) {
    res.send('god')
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});