## Install
First you need to install node.js
Then type "npm install":
```bash
$ npm install
```


## Run the server and start developing
```bash
$ gulp
```
1. Simply type gulp, and the server starts. The server is running at http://localhost:3000/inspera
2. Whenever you change/add SCSS files in the CSS directory or change/add JSX files in the JS director, the server runs a react JSX and SCSS compile of the JSX files to js and SCSS files to CSS
4. Look at gulpfile.js for details



## How to develop
### JSX
React is one of the libraries we use at Inspera to build UIs. This task will require you to do advanced changes requiring deep react knowledge. http://facebook.github.io/react/docs/getting-started.html is a good reference if you don't have past experience with react.

### SCSS
When developing CSS we at Inspera use either LESS or SASS (SCSS). Like JSX, the SCSS files in this case is compiled to base.css when changing a SCSS file.

### Node server
You should not need to do any important changes to the server setup.

#Inspera Frontend Assignments

## CSS
1. Style the navbar to use a Boostrap navbar making it responsive and mobile friendly. The logo should be on the left with the nav items following. The menu items should be expandable on mobile. Just use plain boostrap and don't do any attempts to make it really really pretty.

2. Center the article and set max width to 600px to avoid getting to long lines.

3. Make the main header in the text (H1) be font-size 26px, and the headers in the text (H2) be font-size 20px, whenever the screen width is less than 720px.

## Javascript
1. Get the expandable menu on mobile in the navbar working.

2. Rewrite the for loop in js/view/Navbar.jsx to use return a new array using map to iterate over the navBar array.

3. Change js/model/NavModel.getNavBarItems so that it sorts the items on title.

4. Find a unit test framework of your liking and add a unit test for the js/model/NavModel.getNavBarItems. Ideally it should run automatically when changing the js/jsx files.