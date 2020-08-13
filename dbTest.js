let db = require("./models");

db.article.findOne()
  .then(foundArticle => {
    foundArticle.createComment({
      name: "paul allen",
      content: "wow! great job!"
    })
      .then(createdComment => {
        console.log(createdComment.get());
      });
  });

db.article.findOne({
  where: {id: 1},
  include: [db.comment]
})
  .then(article => {
    article.comments.forEach(comment => {
      console.log(comment.get());
    });
  });


//
// db.comment.create({
//   name: "paul allen",
//   content: "wow! great job!",
//   articleId: 1
// }).then( comment => {
//   console.log(comment.get());
// })
