//------------------ SingUp process ---------------------//
import express from"express" ; 
import Usercontroller from "../controller/Usercontroller.js";


var router = express.Router();
 router.route("/signin").post(Usercontroller.create)
 router.route("/signup").post(Usercontroller.signup)


// router.post("/signup", async (req, res) => {
//   const newUser = new Userdata(req.body);
//   try {
//     const user = await newUser.save();
//     if (!user) throw new Error("saving not done !");
//     res.status(200).json(user);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
// //------------------ SingIn process ---------------------//
// router.get("/signin", async (request, response) => {
//   try { console.log(req.boy)
//       var user = await UserModel.findOne({ Usermail: request.body.Usermail }).exec();
//       if(!user) {
//           return response.status(400).send({ message: "The email does not exist" });
//       }
//       if(!Bcrypt.compareSync(request.body.Password, user.Password)) {
//           return response.status(400).send({ message: "The password is invalid" });
//       }
//       response.send({ message: "The email and password combination is correct!" });
//   } catch (error) {
//       response.status(500).Send(error);
//   }
// });
// //------------------ Restaurent owner Request pendeing admin role only ---------------//
// router.put('Restoowner', async (req, res)=>{
//   const { id } = req.params
//   try{
//       const pending = await Userdata.findByIdAndUpdate( id, { Restoowner : "pending" });
//       if(!pending) throw new Error('pending request obstructed !');
//       res.status(200).json(pending);
//   }
//   catch (err){
//       res.status(500).json({message: err.message})
//   }
// });
// //------------------ Restaurent owner Request accepted admin role only ---------------//

// router.put('/Restoowner/:id', async (req, res)=>{
//   const { id } = req.params
//   try{
//       const accepted = await Userdata.findByIdAndUpdate( id, { Restoowner : "Restoowner" });
//       if(!accepted) throw new Error('acception request not done !');
//       res.status(200).json(accepted);
//   }
//   catch (err){
//       res.status(500).json({message: err.message})
//   }
// });
// //------------------ Restaurent owner Request denied admin role only ---------------//

// router.put('/Restoowner/:id', async (req, res)=>{
//   const { id } = req.params
//   try{
//       const denied = await Userdata.findByIdAndUpdate( id, { Restoowner : "none" });
//       if(!denied) throw new Error('Restaurent owner Request denied not done !');
//       res.status(200).json(denied);
//   }
//   catch (err){
//       res.status(500).json({message: err.message})
//   }
// });


export default router;
