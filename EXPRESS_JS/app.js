const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const adminRouter= require('./router/admin')
const shopRouter = require('./router/shop')
const path = require("path")
const rootDir = require("./utils/path")

// when we create more then 1 midware we need to set next() to excute next midlware

// app.use((req,res,next)=>{
//     console.log("first midlware",req.url)
//     res.send('<p>1 midlware!</p>')
//     next()
// })

// app.use((req,res,next)=>{
//     console.log("second midlware",req.url)
//     res.send('<p>2 midlware!</p>')
// })
//
//
//url setting

// app.use('/first',(req,res,next)=>{
//     console.log("first midlware",req.url)
//     res.send('<p>1 midlware!</p>')
// })

// app.use('/second',(req,res,next)=>{
//     console.log("second midlware",req.url)
//     res.send('<p>2 midlware!</p>')
// })

// app.use('/',(req,res,next)=>{ // its default / page we need to write it last .whichever path call its always execute.
//     console.log("always midlware",req.url)
//     res.send('<p>defult midlware!</p>')
// })

app.use(express.static(path.join(__dirname,"public"))) // save a static file and execute on 404 page its should give in before the router
//make public as a static file so that when we mension file js take as a link so that we need make its static if the file not relate to js


//Parsing from request

app.use(bodyParser.urlencoded())//get input from the user

//router use
app.use("/admin",adminRouter)  
app.use(shopRouter) 
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,"views","404.html"))
})

app.listen(3000)