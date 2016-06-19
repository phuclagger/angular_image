var express = require('express');
var path = require('path');
var app = express();
var jsonfile = require('jsonfile');
var bodyParser  = require('body-parser');
var fs = require('fs');
var multer  = require('multer');
var imagePath = __dirname + '/images/';
var imageJSON = __dirname + '/imageList.json';
var uuid = require('node-uuid');
var imageName = '';
var moment = require('moment');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, imagePath);
    },
    filename: function (req, file, cb) {
        imageName = Date.now() + '-' + file.originalname;
        cb(null, imageName);
  }
});
var upload = multer({ storage: storage });

app.use('/', express.static('public'));
app.use('/images', express.static('images'));
app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/views/index.html');
});

app.get('/imageList', function(req, res){    
    jsonfile.readFile(imageJSON, function(err, obj){
        if (err){
            return res.json({'Error': err});
        }                
        res.json(obj.images);    
    });
    
}); 

app.post('/image/upload', upload.single('file'), function(req, res, next){
    
    console.log(req.body);
    jsonfile.readFile(imageJSON, function(err, obj){        
       if (err){
           return res.json({'Error': err});
       } 
       obj.images.push({
           'id': uuid.v4(),           
           'url': imageName,
           'filename': imageName.substr(14),
           'uploadDate': moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a'),
           'uploader': req.body.uploader
       });
       jsonfile.writeFile(imageJSON, obj, function(err){
            res.sendStatus(200);       
       });
    });      
        
    
});
app.listen(8080, function () {    
  console.log('Listening on port 8080');
});