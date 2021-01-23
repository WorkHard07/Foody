import express from "express";
import Resto from "../models/resto.model.js";
import Restocontroller from "../controller/Restocontroller.js";

var router = express.Router();
router.get("/", (req, res) => {
  Resto.find({}, (err, restos) => {
    res.json(restos);
  });
});
//router.post("/", (req, res) => {});
router.route("/").post(Restocontroller.restosignup);
router.route("/getpendinrequest").get(Restocontroller.getallpendingrestos);
router.route("/id").put(Restocontroller.acceptresto);

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

export default router;
