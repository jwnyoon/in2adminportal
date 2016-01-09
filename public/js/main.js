
//init
    window.fbAsyncInit = function() {
    FB.init({
      appId      : '992576814114726',
      xfbml      : true,
      version    : 'v2.5'
    });

    FB.getLoginStatus(function(response){
      if(response.status === 'connected'){
        console.log("You are already connected");
        console.log(response);
             page = response;
             console.log(page.access_token);
            // postToFacebookPage(page);
            DoSubmit();

      } else{
        console.log("Let's log in");
        DoSubmit();
      }


    });

  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


// //login
function DoSubmit()
{
   FB.login(function(response) {
            FB.api('/me/accounts', function(response){
                if (!response || response.error) {
                    console.log(response.error);

                }
                else {
                    page = response.data[0];
                    // postToFacebookPage(page);
                    getMessage(page);
                    console.log(page.access_token);

                }
            });
        }, {
            scope: 'manage_pages, publish_pages'
     
        });

}


function getSongList(){
  var song1 = $("#song1").val();
  var link1 = $("#link1").val();

  var song2 = $("#song2").val();
  var link2 = $("#link2").val();

  var song3 = $("#song3").val();
  var link3 = $("#link3").val();

  var song4 = $("#song4").val();
  var link4 = $("#link4").val();

  // var songlist = [];
  // for (var i = 0; i < 3; i++){
  //   songlist.push(song)
  // }

  var songlist = song1 + "\n" + link1 + "\n" + "\n" + song2 + "\n" + link2 + "\n" + "\n"+song3 + "\n" + link3 + "\n" + "\n"+ song4 + "\n" + link4;
  console.log(songlist);
  return songlist;
}


function addCategoryTitle(){
  var category = getCategoryTitle();
  if (category == "etc"){
    console.log("category is etc");
    var categoryTitle = $("#titletext").val();
            console.log("categorytitle:"+ categoryTitle); 
        return categoryTitle;

  }

  else{
    var categoryTitle = category;  
    return categoryTitle;
         console.log("categorytitle:"+ categoryTitle); 
  }

}

function getCategoryTitle(){
    var category= $('#mydropdown').val();
    console.log("I got categorytitle"+category);
    return category; 
}


function getMessage(page){
  // var message = document.getElementById('bodytext');
  var songlist = getSongList();
  var message = $( "#bodytext" ).val();
  console.log(message);
  console.log(page.access_token);
  var categoryTitle = addCategoryTitle();
  console.log(categoryTitle);
  var content = '['+categoryTitle+']'+' '+message+"\n"+songlist;
// });
  if(content === null){
      alert("write something");
}
  else{
      postToFacebookPage(page,content);
  }    



}


  
function postToFacebookPage(page,content) {

        var params = {
            access_token : page.access_token,
            message : content,
          
        };
        FB.api('/198630340478851/feed', 'post', params, function(response) {
            if (!response || response.error) {
                console.log(response.error);
            }
            else {
              console.log("Success!");
          
            }

        });
        $('form :input').val("");
        $('input:submit').val("submit");
    };

