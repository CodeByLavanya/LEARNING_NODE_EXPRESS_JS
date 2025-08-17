const express = require("express")
const router = express.Router()
const {loginPage, dashboardPage, loginProcess} = require("../controllers/userController")

router.get("/",loginPage)
router.get("/dashboardPage",dashboardPage)
router.post("/login",loginProcess)


module.exports = router