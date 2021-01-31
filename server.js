const express = require('express');
const app = express();
app.use(express.static('public'));

// const hbs = require('express-handlebars')({
//   defaultLayout: 'main',
//   extname: '.html'
// });

app.set('view engine', 'pug')


app.get("/", (request, res) => {
  //response.render('index');
  res.render('index', {
    title: 'Hey',
    message: 'Hello there!',
    recs: JSON.stringify(require('./config.json'))
  })
});

app.get("/football", (request, response) => {
  response.render('football');
});

app.get("/basketball", (request, response) => {
  response.render('basketball');
});
app.get("/as", (request, response) => {
  response.render('as');
});
app.get("/baseball", (request, response) => {
  response.render('baseball');
});
app.get("/rugby", (request, response) => {
  response.render('rugby');
});


let listener = app.listen(3555, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});