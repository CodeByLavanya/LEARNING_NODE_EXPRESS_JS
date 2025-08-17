const express = require("express")
const app = express()
const {engine} = require("express-handlebars")
const path = require("path")
const userRoutes = require("./routes/user")

app.use(express.urlencoded())
app.engine("hbs", engine({extname : "hbs", defaultLayout: false}))
app.set("view engine" , "hbs")

app.use(userRoutes)
app.use(express.static (path.join(__dirname,"public")))


app.listen(3000)