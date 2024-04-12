const path=require('path')
const fs=require('fs')
var comment
const staticDatafilePath=path.join(__dirname, './comment.txt');
try { 
    comment=fs.readFileSync(staticDatafilePath,'utf8')
} catch (err) {
    comment=""
    console.error(err)
}
function generateComment(req, res){
    return {
        user: "Bot"+(Math.floor(Math.random()*1000)),
        comment: comment+Math.round(Math.random()*2+8)
    }    
}
module.exports=generateComment;