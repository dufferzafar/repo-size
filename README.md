# Repo Size

A userscript to show the size of a Github Repo. 

[![Install](https://raw.github.com/jerone/UserScripts/master/_resources/Install-button.jpg)](https://github.com/dufferZafar/repo-size/raw/master/Github-Repo-Size.user.js)

*Note: You'd need a Greasemonkey-ish addon for your browser to use the script.*

## Screenshot

![Screenshot](/screen.jpg)

## Tested on

Firefox 29.0.1 
 - Scriptish 0.1.11 
 <!-- - GreaseMonkey 1.15 -->

Chrome 35
 - Tampermonkey 3.7.48 

<!-- Safari 5.1.7 NinjaKit  -->

## Notes and Version History

* **1.5**

Script now uses 'Content-Length' header of the Zip file, so the exact size of the Zip file is shown (rounded to on decimal place.)

I'd also like to point out that the zip file is not actually downloaded, only its size is fetched.

* **1.2**

A small bug was fixed and the userscript was made to work on FF, Chrome and Safari.

* **1.0.1**

@pankajsharma converted the chrome plugin to a userscript that didn't use jQuery and worked on FF.

* **1.0**

Was initially released as a Chrome extension (used to rely on jQuery and Github's API.)

The Github API returns the size of the uncompressed repo and not of the zip that you download.

The plan was to write a native extension for Firefox too.

## Todo

* Fix Issue #3

* Support branches other than master (use regex to find the current branch.)
