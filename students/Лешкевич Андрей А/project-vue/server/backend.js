const express = require('express');
const http = require('http');
const static = require('node-static');
const file = new static.Server('../dist/');
const fs = require('fs');

/*const app = express();
app.listen(3000, () => {
    
});*/
http.createServer((req, res) => {
    file.serve(req, res);
}).listen(3000);
console.log('server is running on port http://localhost:3000/ !');