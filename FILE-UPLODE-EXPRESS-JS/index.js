const express = require ("express")
const app = express()
const path = require("path")
const multer = require("multer")

app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")

var storage = multer.diskStorage({
    destination : function(req, file, cb){//cb - call back function //destination can set in 2 way functions or we can set  destination : "views"  directly
        
        //some work
        cb(null,"uploads")
    },
    filename : function(req, file, cb){
        cb(null, file.originalname.replace(/\.[^/.]+$/,"") + "_" + Date.now()+ path.extname(file.originalname)) // file type extract 
    }
})

let maxsize = 2*1000*1000

let upload = multer({
    storage : storage ,
    limits :{
        fileSize : maxsize
    },
    fileFilter : function(req, file, cb){
        let filetypes = /jpeg|jpg|png/;
        let mimetype = filetypes.test(file.mimetype)
        let extname = filetypes.test(path.extname(file.originalname).toLowerCase())

        if(mimetype && extname){
            return cb(null , true)
        }

        cb("Error : File upload only supports the following file type" + filetypes)
    }
}).single("mypic");

app.get("/",(req,res)=>{
    res.render("signup")
})

app.post('/upload',(req, res, next)=>{
    upload(req, res, function(err){
        if(err) {
            if(err instanceof multer.MulterError && err.code == "LIMIT_FILE_SIZE"){
               return res.send("File size is maximum 2mb");
            }

            res.send(err);
        }else{
            res.send("Success. Image Uploaded!")
        }
    })
})

app.listen(3000)