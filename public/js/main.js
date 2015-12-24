
//init
    window.fbAsyncInit = function() {
    FB.init({
      appId      : '992576814114726',
      xfbml      : true,
      version    : 'v2.5'
    });

    FB.getLoginStatus(function(response){
      if(response.status === 'connected'){
        console.log("Connected");
        console.log(response);
             page = response;
            postToFacebookPage(page);

      } else{
        Login();
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
function Login()
{
   FB.login(function(response) {
            FB.api('/me/accounts', function(response){
                if (!response || response.error) {
                    console.log(response.error);

                }
                else {
                    page = response.data[0];
                    postToFacebookPage(page);
                    console.log(page);

                }
            });
        }, {
            scope: 'manage_pages, publish_pages'
     
        });

}


  
function postToFacebookPage(page) {

        var params = {
            access_token : page.access_token,
            message : "merry christmas",
          
        };
        FB.api('/198630340478851/feed', 'post', params, function(response) {
            if (!response || response.error) {
                console.log(response.error);
            }
            else {
              console.log("Success!");
          
            }

        });
    };

