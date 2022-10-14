/* 복습파일 */
const express = require('express');
const app = express();

app.listen(8080, function(){
  console.log('listening on 8080');
});

app.get('/test', function(req, res){
  res.send('테스트 페이지 입니다.');
});