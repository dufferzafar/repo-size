// ==UserScript==
// @name        Github Repo Size
// @namespace   github_repo_size
// @include     https://github.com/*
// @version     1
// @grant       none
// ==/UserScript==
function AJAX_JSON_Req( url, button )
{
    var AJAX_req = new XMLHttpRequest();
    AJAX_req.open( "GET", url, true );
    AJAX_req.setRequestHeader("Content-type", "application/json");

    AJAX_req.onreadystatechange = function()
    {
        if( AJAX_req.readyState == 4 && AJAX_req.status == 200 )
        {
            var response = JSON.parse( AJAX_req.responseText );
            var size = response.size;
            if (size < 100) {
                append = "ZIP";
             }
             else if (size < 1000) {
                append = size + " KB";
             }
             else {
                append = Math.round(size/1024) + " MB";
             }
            alert(append);
            button.text = button.text.replace("ZIP", " - "+append);
        }
    }
    AJAX_req.send();
}

var buttons = document.getElementsByClassName('minibutton sidebar-button');
if(buttons.length > 1){
    var url_parts = location.pathname.split('/');
    var repo_url = url_parts[1] + '/' + url_parts[2].split('?')[0];
    AJAX_JSON_Req('https://api.github.com/repos/'+repo_url, buttons[1]);
}