const express = require("express");
const router = express.Router();

router.get('/driving',(req,res)=>{
    res.json({
        sign:"0",
        msg:"123"
    })
})

module.exports = router;
