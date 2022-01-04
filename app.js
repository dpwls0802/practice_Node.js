const express = require('express');
const app = express();
const port = 3000;

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
