import User from "../models/userdata.js";
import Resto from "../models/resto.model.js";
import bcrypt from "bcrypt";
const create = async (request, response) => {
  const resto = await getresto(request.body.Usermail, request.body.Password);
  if (resto != false) {
    console.log(resto);

    console.log("ici c'est paris");
    return response.send({ resto, role: "owner" });
  }
  try {
    console.log(request.body);
    var user = await User.findOne({ Usermail: request.body.Usermail }).exec();

    console.log(user);
    if (!user) {
      return response.status(400).send({ message: "The email does not exist" });
    }
    if (!bcrypt.compareSync(request.body.Password, user.Password)) {
      return response.status(400).send({ message: "The password is invalid" });
    }
    response.send({
      user,
      role: "user",
    });
  } catch (error) {
    response.status(500).send(error);
  }
};
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
export default { create, signup };
