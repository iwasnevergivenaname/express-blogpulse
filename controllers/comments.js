let express = require('express');
let db = require('../models');
let router = express.Router();

router.post("/", (req, res) => {
  db.comment.create({
    name: req.body.name,
    content: req.body.content,
    articleId: req.body.articleId
  }).then((comment) => {
    res.redirect(`articles/${req.body.articleId}`);
  }).catch(error => {
    console.log("error in comment post route", error);
  });
});

// router.post("/", (req, res) => {
//   db.comment.create(req.body)
//     .then(() => {
//       res.redirect(`/articles/${req.body.articleId}`);
//     }).catch(error => {
//     console.log(error);
//   });
// });


module.exports = router;
