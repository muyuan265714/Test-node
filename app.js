const express = require("express");
const app = express();
const apiRouter = require("./router/apiRouter")

app.use("/",apiRouter);

app.listen("88",()=>{
    console.log("服务器启动成功")
})