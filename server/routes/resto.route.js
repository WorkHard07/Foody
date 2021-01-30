import express from "express";
import Resto from "../models/resto.model.js";
import Restocontroller from "../controller/Restocontroller.js";
import multer from "multer";
import bcrypt from "bcrypt";

var upload = multer({ dest: "public/images" });
var router = express.Router();
import path from "path";

const __dirname = path.resolve(path.dirname(""));

router.post("/", upload.single("image"), async (req, res, next) => {
  const imagePath = path.join(__dirname, "/public/images/" + req);
  const salt = bcrypt.genSaltSync(10);

  const resto = new Resto({
    name: req.body.name,
    restaurantName: req.body.restaurantName,
    picture: req.file.filename,
    address: req.body.address,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, salt),
  });
  var restowner = await Resto.findOne({ email: resto.email }).exec();
  if (restowner) {
    return res.status(400).send({ message: "the email already exist !" });
  }
  resto.save(() => {
    res.json(resto);
  });
});

router.route("/", upload.single("image")).post(Restocontroller.restosignup);
router.route("/getpendinrequest").get(Restocontroller.getallpendingrestos);
router.route("/id").put(Restocontroller.acceptresto);
router.route("/getall").get(Restocontroller.getallacceptedrestos);
router.put("/partnerOk/:id", async (req, res) => {
  var resto = await Resto.findById(req.params.id);
  resto.partner = req.body.partner;

  resto.save(() => {
    res.json(resto);
  });
});

router.delete("/:id", (req, res) => {
  Resto.findByIdAndDelete(req.params.id, (err) => {
    res.json({ message: "deleted" });
  });
});
router.put("/getResto/:id", async (req, res) => {
  var resto = await Resto.findById({ _id: req.params.id });
  console.log("here", resto);
  res.json(resto);
});
// filepath(filename) {
//   return path.resolve(`${this.folder}/${filename}`)
// }
export default router;
