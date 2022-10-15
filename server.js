/* 복습파일 */

const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));

app.listen(8080, function () {
  console.log('listening on 8080');
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/write', function(req, res){
  res.sendFile(__dirname + '/write.html');
})

app.post('/add', function(req, res){
  console.log(req.body);
  res.send('전송완료');
});