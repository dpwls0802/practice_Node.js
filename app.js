const express = require('express');
const app = express();
const port = 3000;

app.set('views', './views'); //템플릿 있는 디렉토리
app.set('view engine', 'pug'); //사용할 템플릿 엔진

app.use(express.static('public')); //정적 파일 제공
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/route', (req, res) => {
  res.send('Hello Router, <img src="/background.png">');
});

app.get('/dynamic', (req, res) => { //동적
  var lis='';
  for(var i=0; i<5; i++) {
    lis = lis + '<li>coding</li>';
  }
  var time = Date();
  var output= `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
      Hello Dynamic!
      <ul>
        ${lis}
      </ul>
      ${time}
    </body>
  </html>`;
  res.send(output);
});

app.get('/login', (req, res) => {
  res.send('login please!');
});

//템플릿 엔:
app.get('/template', (req, res) => {
  res.render('index', {title : 'hey', message : 'hello~~'});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
