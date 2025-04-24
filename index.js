const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index',);
});

app.get('/login', (req, res) => {
  res.render('auth',);
});
app.get('/info', (req, res) => {
  res.render('productInfo',);
});
app.get('/product', (req, res) => {
  res.render('products',);
});

app.listen(3001);