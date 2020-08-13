let express = require('express');
let db = require('../models');
let router = express.Router();

router.post("/", (req, res) => {
  db.comment.create({
    where: {
      name: req.body.name,
      content: req.body.content,
      articleId: req.params.id
    }
  }).then(() => {
    res.redirect(`articles/${req.params.id}`);
  }).catch(error => {
    console.log(error)
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
