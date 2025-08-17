const fs = require("fs")
const path = require("path")

exports.getUser =(email) =>{
    const BufferData = fs.readFileSync(path.join(__dirname, ".." , "data" , "user.json"))
    const jsonData = JSON.parse(BufferData)

    const filteredUser = jsonData.filter((user) =>{
        return user.email == email
    })

    if(filteredUser.length > 0){
        return filteredUser[0]
    }else{
        return null
    }
    
}