'use strict';
module.exports = (sequelize, DataTypes) => {
  let bookmark_tag = sequelize.define('bookmark_tag', {
    bookmarkID:{
      type: DataTypes.INTEGER,
      defaultValue: 0,
    }, 
    tagID:{
      type: DataTypes.INTEGER,
      defaultValue: 0,
    } 
  }, {});
  
  bookmark_tag.associate = function(models) {
    // associations can be defined here
};
  return bookmark_tag;
};