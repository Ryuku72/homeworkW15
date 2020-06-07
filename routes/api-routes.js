// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function(app) {

  // CREATE SOMETHING

  // CREATE a new bookmark - WORKING
  app.post("/bookmarks", function(req, res) {
    db.bookmark.create({
      url: req.body.url,
      userId: req.body.userId
    })
      .then(function(dbBookmark) {
        res.json(dbBookmark);
      });
  });

  //CREATE a new tag - WORKING
  app.post("/tags", function(req, res) {

    let tagName = req.body.name;
    console.log("req.body.name = " + tagName)
    let bookId = req.body.bookId
    console.log("req.body.bookid = " + bookId)
   
    //find or create? (next update?)
    db.tag.create({
      name: tagName,
    })
      .then(function(dbTag) {
        console.log(dbTag)
        let tagId = dbTag.get("id")
        db.bookmark_tag.create({
        bookmarkId: bookId,
        tagId: tagId
        }).then(()=>{
        res.json(dbTag);
        })
      })
  });


  //DELETE SOMETHING

  //DELETE a tag specific to a bookmark - WORKING
  app.delete("/bookmark_tags", function(req,res) {

    db.bookmark_tag.destroy({
      where: {
        tagId: req.body.tagId,
        bookmarkId: req.body.bookmarkId
      }
    })
    .then(function(dbBookmark_Tag) {
      res.json(dbBookmark_Tag)
    })
  })

  //DELETE a tag completely from all related bookmarks - WORKING
  app.delete("/tags_delete" ,function(req,res){
    db.bookmark_tag.destroy({
      where: { 
        tagId: req.body.id
      }
      }).then(function(result) {
        db.tag.destroy({
          where: { 
            id: req.body.id
          }
          }).then(function(result2) {
            console.log("This tag is delete")
          res.json({one: result, two: result2})
      })
    })
    });

    //DELETE a BOOKMARK - WORKING
    app.delete("/bookmark_del", function(req,res) {

      console.log("URL is " + req.body.url + " userId is " + req.body.id + " and bookmarkId is " + req.body.bookmarkId)

      db.bookmark_tag.destroy({
      where: { 
        bookmarkId: req.body.bookmarkId
      }
      }).then(function(result) {
        db.bookmark.destroy({
          where: { 
            userId: req.body.id,
            url: req.body.url,
            id: req.body.bookmarkId
          }
          }).then(function(result2) {
            console.log("This bookmark is delete")
          res.json({one: result, two: result2})
      })
      })
    })


// GET SOMETHING

  //get all tags for user

  app.get("/bookmarks", function(req, res) {
    db.bookmark.findAll()
  })

  // app.get("/tags", function(req,res) {})



  //get all bookmarks that don't have a tag
  
}