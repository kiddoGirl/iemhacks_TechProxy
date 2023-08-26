const jwt = require('jsonwebtoken');

const requireAuth = (req,res,next) => {

    const token = req.cookies.jwt;

    //check jwt exist
    if(token){
        jwt.verify(token,'manju agronimynet',(err, decodedToken) => {
            if(err){
                console.log(err.message);
                res.redirect('/login'); 
            }else{
                console.log(decodedToken);
                next();
            }
        })
    }
    else{
        res.redirect('/login');
    }

}

module.exports = { requireAuth };