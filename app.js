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

app.get('/login', (req, res) => {
  res.send('login please!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
