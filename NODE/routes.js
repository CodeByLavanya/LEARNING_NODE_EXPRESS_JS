const fs=require('fs');

const requestHandler=(req,res)=>{
const url=req.url;
const method = req.method;

if(url==='/'){
    res.setHeader('Content-type','text.html')//type of data 
    res.write('<html>')
    res.write('<head><title>NODE TUTORIAL</title></head>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="msg"><input type="submit" value="submit"></form></body>')
    res.write('</html>')
    return res.end();
}

if(url === '/message' && method == 'POST'){ 

    const body=[];// if we post a large amount of data its store into multiple part buffer
    req.on('data',(chunk)=>{ // each part we access as a chunk
        body.push(chunk) // we push all chunk in one body
    })

    return req.on('end',()=>{
        const parsedbody = Buffer.concat(body).toString(); // after get all buffer part we concat as a one part and convate in to string to make readable for humans or else its print as buffer number
        console.log(parsedbody) // print 
        const message=parsedbody.split('=')
        fs.writeFile('text1.txt',message[1],(err)=>{
            console.log('File write completed')
            res.setHeader('Location','/')//redirecting request
            res.statusCode = 302;//redirecting statuscode
            return res.end();
        })
    })
}

res.setHeader('Content-type','text.html')//type of data 
res.write('<html>')
res.write('<head><title>NODE TUTORIAL</title></head>')
res.write('<body><div>LAVANYA</div></body>')
res.write('</html>')
res.end();//end of response for node acknowledgement
}


module.exports=requestHandler //export