import User from "../models/userdata.js";
import Resto from "../models/resto.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import jwtDecode from "jwt-decode"
const create = async (request, response) => {
  const resto = await getresto(request.body.Usermail, request.body.Password);
  if (resto != false) {
    return response.send({ resto, role: "owner" });
  }
  try {
    var user = await User.findOne({ Usermail: request.body.Usermail }).exec();
    if (!user) {
      return response.status(400).send({ message: "The email does not exist" });
    }
    if (!bcrypt.compareSync(request.body.Password, user.Password)) {
      return response.status(400).send({ message: "The password is invalid" });
    }
    const roleVerify = user.isadmin ? "admin" : "user";
    console.log("user", roleVerify);

    const payload={
     user

    }

    jwt.sign(payload,"aaa",{expiresIn:1200},(err,token)=>{
      response.send({
        token:token,
        role:roleVerify
        
        
      })
    })
    
  } catch (error) {
    response.status(500).send(error);
  }
};
const signup = (req, res) => {
  try {
    var Usermail = req.body.Usermail;
    var Username = req.body.Username;
    const salt = bcrypt.genSaltSync(10);
    var Password = bcrypt.hashSync(req.body.Password, salt);
    User.create({
      Usermail: Usermail,
      Username: Username,
      Password: Password,
    });
    res.send("done");
  } catch (error) {
    res.send(error);
  }
};

async function getresto(email, password) {
  var resto = await Resto.findOne({ email: email }).exec();
  if (!resto) {
    return false;
  }
  if (bcrypt.compareSync(password, resto.password)) {
    return resto;
  }
}

async function getusernamebyid(id) {
  var user = await User.findById(id).exec();
  return user;
}

const filterByToken=async(req,res)=>{   
  try{
    var userId= jwtDecode(req.body.token).user._id
    var user = await (await User.findOne({_id:userId})).isSelected("-Password")
    console.log(user)
    res.send(user)
  }catch(err){
    res.send({err,status:false})
  }
}

export default { create, signup, getusernamebyid,filterByToken};
