const router = require("express").Router();
const passport = require("passport");
router.get("/google",passport.authenticate("google",{scope:["profile"]}));

router.get("/login/success",(req,res)=>{
    console.log("get called")
    if(req.user){
        res.status(200).json({
            success:true,
            message:"successfull",
            user:req.user
        })
    }
})
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("http://localhost:3001/");
  });

router.get("login/failed",(req,res)=>{
    res.status(401).json({
        success:false,
        message:"failure"
    })
})
router.get("/google/callback",passport.authenticate("google",{
    successRedirect:"http://localhost:3001/",
    failureRedirect:"login/failed"
}))

//github

router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: "http://localhost:3001",
    failureRedirect: "/login/failed",
  })
);

//FACEBOOK

// router.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }));

// router.get(
//   "/facebook/callback",
//   passport.authenticate("facebook", {
//     successRedirect:"http://localhost:3001/",
//     failureRedirect: "/login/failed",
//   })
// );
module.exports = router