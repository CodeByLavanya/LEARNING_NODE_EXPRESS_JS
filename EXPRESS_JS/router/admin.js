const express = require("express")
const path = require("path")
const rootDir = require("../utils/path")

const router = express.Router() //act as a mini express in sun file

router.get('/add-product',(req,res,next)=>{ 
     res.sendFile(path.join(rootDir,"views","add-product.html"))
})

router.get('/store-product',(req,res,next)=>{ 
     res.sendFile(path.join(rootDir,"views","store-product.html"))
})

module.exports = router;