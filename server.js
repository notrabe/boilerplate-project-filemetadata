var express = require('express');
var cors = require('cors');
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

const multer = require('multer')

app.post('/api/fileanalyse', multer().single('upfile'), (req, res) => {
  const responseObject = {}
  responseObject['name'] = req.file.originalname
  responseObject['type'] = req.file.mimetype
  responseObject['size'] = req.file.size
  res.json(responseObject)
})