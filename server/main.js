const express = require("express");
const app = express();
const port = 2007;
app.use(express.static("../client/public"));
app.use(express.json());
app.use(express.urlencoded());
app.get("/", (req,res) => {
    res.send("index.html");
}); 
app.post("/save", (req, res) => {
    console.log(req.body);
    res.redirect("./");
});
app.listen(port);