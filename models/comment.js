'use strict'
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    name: DataTypes.STRING,
    content: DataTypes.TEXT,
    articleId: DataTypes.INTEGER
  }, {
    // freezeTableName: true,
  });
  comment.associate = function(models) {
    models.comment.belongsTo(models.article);
  };
  return comment;
};





// author.prototype.getFullName = function(){
//   return this.firstName + ' ' + this.lastName
// }
// return author
// }
