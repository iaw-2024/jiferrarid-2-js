const generateComment = () => ({
   name: "Bot"+(Math.floor(Math.random()*1000)),
   comment: "Buen post! toma mi +"+Math.round(Math.random()*2+8)
});

function m1(req, res){
    const user = generateComment();
    res.json(user);
}
module.exports=m1;