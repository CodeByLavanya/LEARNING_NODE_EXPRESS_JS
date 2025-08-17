const { getUser } = require("../models/userModels")

exports .loginPage = (req,res,next)=>{
    res.render("login")
}

exports.dashboardPage = (req,res,next)=>{
    const user = getUser(req.query.email)
    res.render("dashboardPage",{
        user
    })
}


exports.loginProcess =  (req,res,next)=>{
    const user = getUser(req.body.email) 
    if(user !== null && user.password === req.body.password){
        res.redirect("/dashboardPage?email="+req.body.email)
    }else if(user === null){
        res.render("error",{
            message: "no User exists with this e-mail"
        })
    }else{
        res.render("error",{
            message: "Invalid Credentials"
        })
    }
}
