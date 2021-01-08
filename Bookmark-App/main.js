document.getElementById("myForm").addEventListener("submit", saveBookmark);
// Save Bookmark
function saveBookmark(e) {
    var siteName = document.getElementById("site-name").value;
    var urlName = document.getElementById("url-name").value;


    if(!validate(siteName,urlName)){
      return false;
    }
    
    var bookmark = {
        name: siteName,
        url: urlName,
    };
    // local storage test
    // localStorage.setItem('test','Hello world');
    // console.log(localStorage.getItem('test'));

    //console.log(locationStorage.getItem('bookmarks'));

// Test if bookmarks is null
    if (localStorage.getItem("bookmarks") === null) {
        // Init array
        var bookmarks = [];
        // Add to array
        bookmarks.push(bookmark);
        // Set to localStorage
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    } else {
        // Get bookmarks from localStorage
        var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
        // Add bookmark to array
        bookmarks.push(bookmark);
       // Re-set back to localStorage
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
    // Clear form

    document.getElementById("myForm").reset();

    // Re-fetch bookmarks
    fetchBookmarks();
    // Prevent form from submitting
    e.preventDefault();
}

// Delete bookmarks

function deleteBookmark(url){
    // console.log(url);
    // Get bookmarks from localStorage
    var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));

    for (var i=0;i<bookmarks.length;i++){
        if(bookmarks[i].url==url){
            // Remove from array
            bookmarks.splice(i,1);  //i=position and 1= one element remove
        }
    }
    // Re-set back to localStorage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    fetchBookmarks();
}
// console.log(JSON.parse(localStorage.getItem('bookmarks')));
function fetchBookmarks(){

    var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));

    var browserResult=document.getElementById('browserResult');

    // Build output
    browserResult.innerHTML = '';

    for(var i=0;i<bookmarks.length;i++){
        var name=bookmarks[i].name;
        var url=bookmarks[i].url;

        browserResult.innerHTML+='<div class="well">'+
        '<h3>'+name+
        ' <a class="btn btn-primary" target="_blank" href="'+url+'">Visit</a> ' +
        ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
        '</h3>'+
        '</div>'+'</br>';
    }
}


function validate(siteName,urlName){
    if(!siteName||!urlName){
        alert('Please fill up the form');
        return false;
    }

    var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    var regExp=new RegExp(expression);

    if(!urlName.match(regExp)){
        alert("URL does not match");
        return false;
    }
    return true;
}