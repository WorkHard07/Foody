import express from "express";
import Menu from "../models/menu.model.js";
import Resto from "../models/resto.model.js";

import multer from "multer";
import path from "path";
var upload = multer({ dest: "public/images" });
const __dirname = path.resolve(path.dirname(""));
import pkg from "mongodb";
import { resolveSoa } from "dns";
const { ObjectId } = pkg;
const router = express.Router();
router.get("/", (req, res) => {
  Menu.find({}, (err, menus) => {
    res.json(menus);
  });
});
router.post("/", upload.single("picture"), (req, res) => {
  var menu = new Menu({
    cathegory: req.body.cathegory,
    name: req.body.name,
    description: req.body.description,
    picture: req.file.filename,
    price: req.body.price,
    resto: req.body.resto,
  });
  menu.save(() => {
    res.json(menu);
  });
});

router.put("/:id", async (req, res) => {
  var menu = await Menu.findById(req.params.id);
  (menu.catthegory = req.body.cathegory),
    (menu.name = req.body.name),
    (menu.description = req.body.description),
    (menu.picture = req.body.picture),
    (menu.price = req.body.price);
  menu.save(() => {
    res.json(menu);
  });
});
router.delete("/:id", (req, res) => {
  Menu.findByIdAndDelete(req.params.id, (err) => {
    res.json({ message: "deleted" });
  });
});
router.get("/rm/:id", (req, res) => {
  console.log("d5al");

  console.log(req.params.id);
  console.log(ObjectId(req.body.id));
  Menu.find({ resto: req.params.id }, (err, menu) => {
    console.log(menu);

    return res.json(menu);
  }).exec();
});

export default router;
