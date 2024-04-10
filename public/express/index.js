function generateComment(req, res){
    return {
        user: "Bot"+(Math.floor(Math.random()*1000)),
        comment: "Buen post! toma mi +"+Math.round(Math.random()*2+8)
    }    
}
module.exports=generateComment;