import bcrypt from "bcrypt";
import Resto from "../models/resto.model.js";

const restosignup = async (req, res) => {
  var restowner = await Resto.findOne({ email: req.body.email }).exec();
  console.log(restowner);
  console.log(req);

  if (restowner) {
    return res.status(400).send({ message: "the email already exist !" });
  } else {
    const salt = bcrypt.genSaltSync(10);
    console.log(salt);

    const resto = new Resto({
      name: req.body.name,
      restaurantName: req.body.restaurantName,
      picture: req.body.picture,
      address: req.body.address,
      email: req.body.email,

      password: bcrypt.hashSync(req.body.password, salt),
    });
    resto.save(() => {
      res.json(resto);
    });
  }
};

const getallpendingrestos = async (req, res) => {
  var restos = await Resto.find({ partner: "none" }).exec();
  console.log(restos);
  if (!restos) {
    return res.json({ message: "no pending request found !" });
  } else {
    return res.json(restos);
  }
};

const acceptresto = async (req, res) => {
  let id = req.body.id;
  console.log(id);

  let partner = { partner: req.body.partner };
  var resto = await Resto.findByIdAndUpdate(id, partner);

  resto.save(() => {
    return res.json(resto);
  });
};

export default { restosignup, getallpendingrestos, acceptresto };
