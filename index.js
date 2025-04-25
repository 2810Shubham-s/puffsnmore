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
app.get('/admin', (req, res) => {
  res.render('admin/dashboard',);
});
app.get('/admin/create', (req, res) => {
  res.render('admin/create-product',);
});
app.get('/admin/products', (req, res) => {
  res.render('admin/products',);
});
app.get('/admin/categories', (req, res) => {
  res.render('admin/categories',);
});
app.get('/admin/offers', (req, res) => {
  res.render('admin/offers',);
});
app.get('/admin/coupons', (req, res) => {
  res.render('admin/coupons',);
});
app.get('/admin/banners', (req, res) => {
  res.render('admin/banners-app',);
});


app.listen(3002);