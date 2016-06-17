var express = require('express');
var path = require('path');
var app = express();
var fs = require('fs');
var multer  = require('multer');
var imagePath = __dirname + '/images/';
var upload = multer({ dest: 'images/' });

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/views/index.html');
});

app.post('/image/upload', upload.single('file'), function(req, res, next){
    var extension = req.file.mimetype.split('/')[1];
    console.log(imagePath + req.file.originalname);
    fs.readFile(req.file.path, function(err, data){
        fs.writeFile(imagePath + req.file.originalname, data, function(err){   
            res.sendStatus(200);           
        });
    });

    
});
app.listen(8080, function () {
  console.log('Listening on port 8080');
});