News App
========

Description
-----------
This is the Week 7 weekend challenge from Makers Academy. The challenge was to create a news app to display headlines and stories using the Guardian Newspaper API.

* Homepage displays a list of headlines
* Clicking on a headline takes you to the full story

Technologies
------------
* Code is written in JavaScript and HTML
* Testing done using a custom test framework
* Node.js runtime environment
* Guardian API

How to Install
--------------
1. Fork this repo
2. Clone your forked repo to your local machine
3. Navigate to the repo using your command line

If you wish to host the app on a local server, do the following:

1. Install Node.js (if you do not have it installed already) by entering `brew install node` into your command line
2. Install http-server. Open `news-app/node_modules/http-server/README.md` for full instructions
3. Run `http-server` from your command line to launch the local server
4. Visit `http://127.0.0.1:8080` to view the app on your local server

Notes
-----
* *Page loading bug:* There is currently a bug with the hashchange event, whereby upon clicking a headline the URL will change, but new content will not load until the page has been manually refreshed.
* *CSS:* I would like to add CSS to the news-app to make it a little more aesthetically pleasing!
* *Homepage Summary:* I would like to add a character limited summary to the homepage beneath each headline
* *Images:* I would like to add images to each story page