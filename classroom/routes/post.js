const express = require ("express");
const router = express.Router();
//posts-users
router.get("/",(req,res)=>{
    res.send("GET for post")
});

//show
router.get("/:id",(req,res)=>{
    res.send("GET for show post id")
});

//post
router.post("/",(req,res)=>{
    res.send("post for post")
});

//delete
router.delete("//:id",(req,res)=>{
    res.send("delete for postb")
});

module.exports = router;