import bcrypt from "bcrypt";
import Resto from "../models/resto.model.js";
import path from "path";

const __dirname = path.resolve(path.dirname(""));

const restosignup = async function (restowner) {
  var restowner = await Resto.findOne({ email: restowner.email }).exec();

  if (restowner) {
    return res.status(400).send({ message: "the email already exist !" });
  } else {
    const salt = bcrypt.genSaltSync(10);
    const resto = new Resto({
      name: restowner.name,
      restaurantName: restowner.restaurantName,
      picture: restowner.picture,
      address: restowner.address,
      password: bcrypt.hashSync(restowner.password, salt),
    });
    resto.save(() => {
      res.json(resto);
    });
  }
};

const getallpendingrestos = async (req, res) => {
  var restos = await Resto.find({ partner: "none" }).exec();
  if (!restos) {
    return res.json({ message: "no pending request found !" });
  } else {
    return res.json(restos);
  }
};

const getallacceptedrestos = async (req, res) => {
  var restos = await Resto.find({ partner: "ok" }).exec();
  if (!restos) {
    return res.json({ message: "no accepted restos found !" });
  } else {
    return res.json(restos );
  }
};
const acceptresto = async (req, res) => {
  let id = req.body.id;

  let partner = { partner: req.body.partner };
  var resto = await Resto.findByIdAndUpdate(id, partner);
  resto.save(() => {
    return res.json(resto);
  });
};

export default {
  restosignup,
  getallpendingrestos,
  acceptresto,
  getallacceptedrestos,
};
