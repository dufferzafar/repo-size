// ==UserScript==
// @name        Github Repo Size
// @namespace   github_repo_size
// @include     *://github.com/*
// @version     1.5
// ==/UserScript==

function Change_Text( url, button )
{
   // console.log(url);

   // GM_xmlhttpRequest is used because it automatically handles
   // Cross Origin Requests which is what this will be.
   GM_xmlhttpRequest({
      url: url,
      method: "HEAD",
      onload: function(response) {
         if( response.readyState == 4 && response.status == 200 )
         {
            // console.log(response.responseHeaders);

            // responseHeaders should've been an object...
            var re = /Content-Length: (\d+)/;
            var match = re.exec(response.responseHeaders);

            var size = match[1] / 1024; //Convert to KBs
            var append = "ZIP";

            if (size < 1000) {
               append = (size).toFixed(1) + " KB";
            }
            else {
               append = (size/1024).toFixed(1) + " MB";
            }

            button.textContent = button.textContent.replace("ZIP", " - " + append);
         }
         else
         {
            // Houston, we have a problem!
            GM_log(response.responseHeaders);
         }
      }
   });
}

var buttons = document.getElementsByClassName('minibutton sidebar-button');

if(buttons.length > 1) {
   var url_parts = location.pathname.split('/');
   var repo_url = url_parts[1] + '/' + url_parts[2].split('?')[0];

   var zip_url = 'https://github.com/' + repo_url + '/archive/master.zip';

   Change_Text(zip_url, buttons[1]);

   // We could use this as a fallback, maybe?
   // var api_url = 'https://api.github.com/repos/' + repo_url;
   // Change_Text(api_url, buttons[1]);
}
