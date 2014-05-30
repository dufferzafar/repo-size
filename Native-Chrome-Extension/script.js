var theElem = $("a:contains('Download ZIP')");

// If the element exists
if (theElem.length > 0) {

   // Get the name of a repository from the URL
   var s = location.pathname.split('/');
   var repoName = s[1] + '/' + s[2];

   // console.log(repoName);

   // Download the JSON containing info.
   $.getJSON("https://api.github.com/repos/" + repoName)
   .done( function(json) {

      // The repo size.
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
   })
}
