//create server
const http = require('http');//http -core module
const requestHandler=require('./routes')//import

const server = http.createServer(requestHandler)
console.log('lavanya')
server.listen(3000);//localhost:3000 => type in chrometo run




    // request info modules

    // console.log(req)//print req in console
    // console.log(req.url);//console url of the server
    // console.log(req.method)//method of action ex: GET,POST
    // process.exit();//to end the program
    // console.log(req.headers)

    // in this code we just create host and just pass the request we didnt give the response
    
