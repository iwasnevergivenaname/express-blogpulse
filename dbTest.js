let db = require("./models");
const comments = db.comment;

comments.create({
  name: "paul allen",
  content: "wow! great job!",
  articleid: 1
}).then( comment => {
  console.log(comment.get());
})
