$(document).ready(function () {

  //Log Out button pop up window
  $("#potrait").click(function (event) {
    event.preventDefault();
    $("#user-dropdown").toggleClass("hidden")
  })

  //Cards pop up window
  $(document).on('click', '.menuBtn', function (event) {
    event.preventDefault();
    const {
      open
    } = $(this).data();
    console.log(open);
    $("#" + open).toggleClass("hidden")
  })

  //bin button pop up window
  $(document).on('click', '.binBtn', function (event) {
    event.preventDefault();
    const {
      open
    } = $(this).data();
    console.log(open);
    $("#" + open).toggleClass("hidden")
  })

  //Generated Tag Delete 'No'
  $(".delNoBtn").on('click', function (event) {
    event.preventDefault();
    const {
      close
    } = $(this).data();
    console.log(close);
    $("#" + close).toggleClass("hidden")
  })

  //PopBox X button
  $(".popEnd").on("click", function(event){
    event.preventDefault();
    const {
      remove
    } = $(this).data();
    console.log(remove);
    $("#" + remove).toggleClass("hidden");
  })

  // POST REQUESTS

  //Add BookMark bar - WORKING
  $("#addBookmark").on('submit', function (event) {
    console.log("you have clicked add bookmark)");
    event.preventDefault();
    regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    let tagInput = $("#bookmarkInput").val().trim();
    let tagVal = tagInput.toLowerCase() 
    console.log(tagInput);
    console.log(tagVal);

    bookURL = checkURL(tagVal)
    console.log("---------")
    console.log(bookURL)
    console.log("---------")
    console.log(tagVal)
    console.log("---------")


    $.getJSON("details.json", function (json) {

      console.log("This is the YOUR USER Id: " + json.id)

      const bookmark = {
        userId: json.id,
        url: bookURL,
      }

      if (regexp.test(tagVal)) {
        console.log("true");
        // Do Ajax call here

        $.ajax("/bookmarks", {
          type: 'POST',
          data: bookmark
        }).then(
          function () {
            location.reload(true);
          }
        )
      } else {
        console.log("false");
        //Do an alert here
      }
    });
  
  })

  //Add Tag
  $(document).on('submit', '.createTagForm', function (event) {
    event.preventDefault();
    regexp = /^[a-z ,.'-]+$/i
    
    let tagIndex = $(this).data("number");
    console.log(tagId);
    let tagName = $("#" + tagIndex + "Tag").val().trim();
    console.log(tagName)
    let bookId = $(this).data("book")
    console.log(bookId)

    let tag = {
      name: tagName,
      bookId: bookId
    }

    if (regexp.test(tagName)) {
      console.log("Added Tag");

      $.ajax("/tags", {
        type: 'POST',
        data: tag,
      }).then(
        function (response) {
            console.log("posted!!!")
            location.reload(true);
          })
    } else {
      console.log("Tag Input Error");
      //Do an alert here
    }
  })

  //Remove tag in DropDown box for Bookmark - WORKING
  $(".removeBtn").on('click', function (event) {
    event.preventDefault();
    console.log("remove btn clicked")
    
    //Get the tag Id and bookmark Id from button 
    let tagNo = $(this).data("id") 
    let bookNo = $(this).data("bookmark")
    console.log(tagNo)
    console.log(bookNo);

    //move id's to send to ajax
    let tagRemove = {
      tagId: tagNo,
      bookmarkId: bookNo
    }

    $.ajax("/bookmark_tags", {
        type: 'DELETE',
        data: tagRemove
      }).then(
        function(){
          console.log("deleted tag id: " + tagNo);
          location.reload(true);
        }
      )
  })

  //Remove bookmark
  $(".xBtn").on('click', function (event) {
   event.preventDefault()
   
   const url = $(this).data("url"); //url
   const bookid = $(this).data("bookid"); //bookmarkId
   const userid = $(this).data("userid"); //userId
   
   console.log(url)
   console.log(bookid)
   console.log(userid)

    let urlX = {
      bookmarkId: bookid,
      url: url, 
      id: userid }

    $.ajax("/bookmark_del", {
        type: 'DELETE',
        data: urlX
      }).then(
        function(){
          console.log("deleted BookMark URL: " + url);
          location.reload(true);
        }
      )
  });

  //Generated Tag Delete 'Yes'
  $(".delYesBtn").on('click', function (event) {
    event.preventDefault();
    console.log("Delete btn clicked")

    //Id still needs to be inserted into HTML
    const tagId = $(this).data("id") 
    console.log(tagId)
    const deleteTag = {
      id: tagId,
    }
    
    $.ajax("/tags_delete", {
      type: 'DELETE',
      data: deleteTag,
    }).then(
      function(){
        location.reload(true);
      }
    )

  })


  // GET REQUESTS ???

  //No Bookmark Tag
  $("#noTagBtn").on("click", function (event) {
    event.preventDefault();
    console.log("You have click tag: No Tag Btn")
    //Do something

    // const noTags = select all where no tag?
    // const noTag = {
    //   where: *?,
    // }
    // $.ajax("/tags", {
    //   type: 'GET',
    //   data: noTag,
    // }).then(
    //   function(){
    //     location.reload(true);
    //   }
    // )
  })

  //All Bookmark Tag - 
  $("#allBookmarks").on("click", function (event) {
    event.preventDefault();
    console.log("You have click tag: all bookmarks Btn")
    //Do something

    res.redirect("/members")
    
  })


  //Generated Tag Btn
  $(".generatedTag").on('click', function (event) {
    event.preventDefault();
    const btnValue = $(this).data("id")
    console.log("You have click tag: " + btnValue)
    //Do Something

    // const tagSelection = {
    //   where: btnValue 
    // }
    // $.ajax("/tags", {
    //   type: 'GET',
    //   data: tagSelection,
    // }).then(
    //   function(){
    //     location.reload(true);
    //   }
    // )
  })

  //Log Out Button
  $("#logOut").on("click", function (event) { 
   console.log("Log Out Button Pushed");
  })

  function checkURL(tagVal) {


    if ((tagVal.length >= 5 ) && (tagVal.substr(0, 4) !== 'http')) {
      let bookURL = 'http://' + tagVal;
      return bookURL
     
    }else {
      let bookURL = tagVal
      return bookURL
    }

  }

});
