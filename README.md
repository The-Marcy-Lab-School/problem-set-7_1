# Unit 7 Problem Set 1

This Problem Set has a coding exercise that should be completed before completing the short response section. In order to complete this assignment, you must complete the coding exercise in `server.js` and answer the short response questions in `short-response.md`. 

## Coding Exercise: HTTP Server
1. You must build out a basic server using the `http` module. 

2. There is some starter code. To start the server, you must first install dependencies by running `npm install`. In the `package.json` file, the `"start"` script uses [nodemon](https://nodemon.io/). You can start your server by running `npm start`. Any changes to your file will restart the server. 

3. Build your server so that it responds differently to different pathnames. If the path is `/`, the app should return a plain text response of "Hello World!". If the path is `/dogs`, the app should return a plain text response of "Hello Dogs!". For any other path, we should return a plain text message of "Sorry, that route does not exist."

4. Refactor your server so that we also return the appropriate status code. The `/` and `dogs` routes should both return a 200 status, while any other path returns a 404 response.

5. Refactor your `/` path to account for query parameters. We should display some non-static content to the user. For example, `/?name=Doug` should then response with the text `Hello Doug!`.

6. Finally, test your application. Make the following requests in your browser and see if your get the correct text. 

```
http://localhost:8080/              => 'Hello World!'
http://localhost:8080/dogs          => 'Hello Dogs!'
http://localhost:8080/blah          => 'Sorry, that route does not exist.'
http://localhost:8080/?name=Doug    => 'Hello Doug!'
http://localhost:8080/?name=Ann     => 'Hello Ann!'
```


## Short Response Section

Answer short response questions directly in the `short-response.md` file. Answer questions in 2 - 3 sentences. Record your answers without removing the original questions. Use complete sentences and style appropriately with markdown.

