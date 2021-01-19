 import User from "../models/userdata.js"
 import  bcrypt from "bcrypt";
 const create = async (request, response) => {
    try { console.log(request.body)
        var user = await User.findOne({ Usermail: request.body.Usermail }).exec();
        console.log(user)
        if(!user) {
            return response.status(400).send({ message: "The email does not exist" });
        }
        if(!bcrypt.compareSync(request.body.Password, user.Password)) {
            return response.status(400).send({ message: "The password is invalid" });
        }
        response.send({ message: "The email and password combination is correct!" });
    } catch (error) {
        response.status(500).send(error);
    }
  }
 const signup = (req, res) => {
    try {
      console.log("here", req.body);
      var Usermail = req.body.Usermail;
      var Username = req.body.Username;
      const salt = bcrypt.genSaltSync(10);
      var Password = bcrypt.hashSync(req.body.Password, salt);
      console.log("Password", Password);
      User.create({
        Usermail: Usermail,
        Username: Username,
        Password: Password,
      });
      res.send("done");
    } catch (error) {
      console.log(error);
    }
  }
  export default {create , signup}