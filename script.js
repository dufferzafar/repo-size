var theElem = $("a:contains('Download ZIP')");
$.getJSON("https://api.github.com/repos" + location.pathname).done( function(json) {
   // console.log( "Size = " + json.size );
   var size = json.size ;

   if (size != null) {
      if (size < 100) {
         append = "ZIP";
      }
      else if (size < 1000) {
         append = size + " KB";
      }
      else {
         append = Math.round(size/1024) + " MB";
      }

      theElem.html(theElem.html().replace("ZIP", " - " + append));
   }
});
