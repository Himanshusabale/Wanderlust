const express = require ("express");
const router = express.Router();

//Index-users
router.get("/",(req,res)=>{
    res.send("GET for userd")
});

//show
router.get("/:id",(req,res)=>{
    res.send("GET for show user id")
});

//post
router.post("/",(req,res)=>{
    res.send("post for userd")
});

//delete
router.delete("/:id",(req,res)=>{
    res.send("delete for user")
});

module.exports = router;