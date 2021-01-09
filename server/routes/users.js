//------------------ SingUp process ---------------------//
var express = require("express");
var router = express.Router();
router.post("/signup", async (req, res) => {
  const newUser = new Userdata(req.body);
  try {
    const user = await newUser.save();
    if (!user) throw new Error("saving not done !");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//------------------ SingIn process ---------------------//
router.post("/signin", async (req, res) => {
  console.log(req.body);
  const entrie = req.body;
  try {
    const compare = await Userdata.findOne({ Useremail: entrie.Useremail });
    if (!compare) throw new Error("signin opperation not done !");
    let confirmation = false;
    if (compare.Password === entrie.Password) {
      confirmation = true;
      res.status(200).json(compare);
    } else {
      res.send(confirmation);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
