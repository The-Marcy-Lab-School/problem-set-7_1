# Unit 7 Problem Set 1

This Problem Set has two code exercises. Within both coding exercises are a serioes of short response questions written in **bold text**. In order to compelte this assignments, you must complete both coding exercises and answer the short response questions by updating this `README.md` directly.

## Instructions

Clone this project down before you begin the coding exercises.

# Coding Exercise 1: Intro to Node

### Step 1:

Open a new terminal.

Confirm you are in the root folder of this project. Then, execute the following command from your command line to create two files in your project:
`touch marcy.js lab.js`

Code the following within `marcy.js`

```javascript
const exportFromSecondFile = require('./lab.js'); /*NOTE: here we use the relative path*/
console.log('content exported from secondFile:', exportFromSecondFile);
```

Run the file marcy.js from your command line by executing the command `node marcy.js`.

**Describe what you notice and give details for why the output looks the way it does.**

### Step 2:

Within the `lab.js` file, place _three_ random key value (string values) pairs on the `module.exports`.
For example: `module.exports.fellows = "awesome"`

Again, run the file `marcy.js` from your command line by executing the command `node marcy.js`.

**Describe what you notice and give details for why the output looks the way it does.**

### Step 3:

Within the `lab.js` file, define a function called `getFavoriteNumber`, which must return your favorite integer.

Add a new key `favoriteNumber` to the `module.exports` object and use the invocation of your function as the value like so: `module.exports.getFavoriteNumber = getFavoriteNumber`.

Again, run the file `marcy.js` from your command line by executing the command `node marcy.js`.

**Describe what you notice and give details for why the output looks the way it does.**

### Step 4:

Comment out your current code within `marcy.js`.
Beneath your commented out code, require the `lab.js` file multiple times.

```js
require('./lab.js'); 
require('./lab.js'); 
require('./lab.js'); 
```

Go into `labs.js` and add a random console.log statement that you'd like to see appear in your terminal.

Before running the marcy.js file, make a prediction about what you might see as the output.

Run `node.marcy.js` from the command line.

**How many times what your statement logged to the console and why? Reference the [node.js docs](https://nodejs.org/docs/latest/api/modules.html#modules_caching) to learn more about caching**

# Coding Exercise 2: HTTP Server

1. Initialize a node project, in the `node-http-application` folder. `cd node-http-application` and then run `npm init`. 

2. Create an `index.js` file in this folder. Use the `http` library to create a [hello world node application](https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTP-server/). The app should return the plain text of "Hello World" for each response, return a HTTP response code of `200` (success), and should run on port `8080`. You should be able to start your server using the command `npm start`.

3. Add a couple more modules to the top of your `index.js` file to make the next steps easier.

```js
const http = require('http')
const fs   = require('fs')
const url = require('url');
```

4. Update your server function so that your application responds differently to different pathnames. If the path is `/`, the app should return a plain text response of "Hello World!". If the path is `/dogs`, the app should return a plain text response of "Hello Dogs!". For any other path, we should return a plain text message of "Sorry, that route does not exist."

5. Change the server function you wrote so that we also return the appropriate status code. The status codes of the application so that the `/` and `dogs` routes both return a 200 status, while the default option becomes a 404 response.

6. Create a function called `renderReponse` that takes in a string of text and an optional status code integer (if no status code is given, it should default to 200). This function should write the status code to the header and the response text to the response, then end the response. Refactor your server to take advantage of this new function.

7. Refactor your `/` path to account for query parameters. We should display some non-static content to the user. For example, `/?name=Doug` should then response with the text `Hello Doug!`.

8. Finally, test your application. Make the following requests in your browser and see if your get the correct text. 

```
http://localhost:8080/              => 'Hello World!'
http://localhost:8080/dogs          => 'Hello Dogs!'
http://localhost:8080/blah          => 'Sorry, that route does not exist.'
http://localhost:8080/?name=Doug    => 'Hello Doug!'
http://localhost:8080/?name=Ann     => 'Hello Ann!'
```

### Short Response

1. **Describe the purpose of HTTP Status Codes. Why are these important?**

2. **What is the difference between a URL and a URI?**

3. **What is the purpose of query params? How do we use them in our applications?**

4. **What is the client and what is the server in this exercise?**
