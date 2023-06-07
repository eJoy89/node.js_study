const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


const MongoClient = require('mongodb').MongoClient;

let db;

MongoClient.connect('mongodb+srv://yunjaeCho:01031164122@cluster0.7yiptpv.mongodb.net/?retryWrites=true&w=majority', function(err, client) {
    if (err) {
        return console.log(err);
    }
    db = client.db('testing');

    db.collection('post').insertOne({ 이름: 'John', _id: 100 }, function(err, result) {
        console.log('저장완료');
    });


    app.listen(8080, function() {
        console.log('listening on 8080');
    });
});


app.get('/pet', function(req, res) {
    res.send('pet shopping site');
});

app.get('/beauty', function(req, res) {
    res.send('Wish to leave this bloody country');
});

app.get('/good', function(req, res) {
    res.send('god');
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/add', function(req, res) {
    res.send('good');
});
