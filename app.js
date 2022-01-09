const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');

app.set('views', './views'); //템플릿 있는 디렉토리
app.set('view engine', 'pug'); //사용할 템플릿 엔진

app.use(express.static('public')); //정적 파일 제공
app.use(bodyParser.urlencoded({ extended: false})) //parse app;ication/x-www-form-urlencoded
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

//템플릿 엔진
app.get('/template', (req, res) => {
  res.render('index', {title : 'hey', message : 'hello~~'});
});

//쿼리스트링, 쿼리 객체
app.get('/topic', (req, res) => {
  var topics = [
    'javascript is..', 'nodejs is...', 'express is..'
  ];

  var str = `
    <a href="/topic?id=0">javascript</a><br>
    <a href="/topic?id=1">nodejs</a><br>
    <a href="/topic?id=2">express</a><br>
  `;

  var output = str + topics[req.query.id]
  res.send(output);
});

//semantic URL
app.get('/topic/:id', (req, res) => {
  var topics = [
    'javascript is..', 'nodejs is...', 'express is..'
  ];

  var str = `
    <a href="/topic?id=0">javascript</a><br>
    <a href="/topic?id=1">nodejs</a><br>
    <a href="/topic?id=2">express</a><br>
  `;

  var output = str + topics[req.params.id]
  res.send(output);
});

//form을 통한 정보 전달(get/post)
app.get('/form', (req, res) => {
  res.render('form');
});

//get
app.get('/form_receiver', (req, res) => {
  res.send('hello, get');
  var title = req.query.title;
  var description = req.query.description;
  res.send(title+','+description);
});

//post
app.post('/form_receiver', (req, res) => {
  var title = req.body.title;
  var description = req.body.description;
  res.send(title+','+description);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
