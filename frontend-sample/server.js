const express = require('express');
const cors = require('cors');
const app = express();


const jwt = require('jsonwebtoken');
app.use(cors());

app.use('/login', (req, res) => {
  const id =123456789;
  const result = {
     "id":id,
     "name":"sampleName",
     "otrheprop":"prop"
  };
  const token = jwt.sign({id},"jwtSecret",{
    expiresIn:300,
  });
  res.json({auth:true,token:token,result:result,expiresIn:300});
  });

const verifyJWT= (req,res,next) => {
const token = req.headers["x-access-token"]

if (!token){
  res.send("a token is required");
}else {
  jwt.verify(token,"jwtSecret",(err,decode)=>{
    if (err) {
      res.json({auth:false,message:"error authenticated"})
    }else {
      req.userID = decode.Id;
      next();
    }
  })
}

}

app.get('/isUserAuht',verifyJWT,(req,res) =>
 res.send("You are authenticated")
 );

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));