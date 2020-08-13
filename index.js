let express = require('express');
let ejsLayouts = require('express-ejs-layouts');
let db = require('./models');
let moment = require('moment');
let rowdy = require('rowdy-logger');
let app = express();

const PORT = 4200;

rowdy.begin(app);

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({extended: false}));
app.use(ejsLayouts);
app.use(express.static(__dirname + '/public/'));

// middleware that allows us to access the 'moment' library in every EJS view
// NOTICE THIS USE OF NEXT()
app.use((req, res, next) => {
  res.locals.moment = moment;
  next();
});

// TO BLOGPULSE AKA MAIN PAGE
// GET / - display all articles and their authors
app.get('/', (req, res) => {
  db.article.findAll({
    include: [db.author]
  })
  .then((articles) => {
    console.log(articles)
    res.render('main/index', {articles: articles});
  })
  .catch((error) => {
    console.log(error);
    res.status(400).render('main/404');
  });
});

// bring in authors and articles controllers
app.use('/authors', require('./controllers/authors'));
app.use('/articles', require('./controllers/articles'));
app.use('/comments', require('./controllers/comments'));


const server = app.listen(PORT, () => {
  rowdy.print();
});

module.exports = server;
