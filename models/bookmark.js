'use strict';
module.exports = (sequelize, DataTypes) => {
  const bookmark = sequelize.define('bookmark', {
    url: {
      type: DataTypes.STRING,
      defaultValue: "www.google.com"
    },
    clickCount: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  bookmark.associate = function(models) {
    // associations can be defined here

    bookmark.belongsTo(models.user, {
      foreignKey: {
        name: "userId",
        allowNull: false,
      }, 
      
    })
    bookmark.belongsToMany(models.tag, { through: 'bookmark_tags',
      onDelete: "CASCADE",
    })
  };
  return bookmark;
};