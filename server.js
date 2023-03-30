const http = require('http');
const url = require('url');
const exportFromSecondFile = require('./marcy')

console.log('content exported from secondFile:', exportFromSecondFile);

const port = 8080;
const host = 'localhost'

const requestListener = function (req, res) {
    // Implement your server here
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});