import express from "express"
import chalk from "chalk";
import taskrouter from "./Router/index.router.js";
import Datadb from "./Config/index.dataBase.js"

Datadb()

//Port Number
let PORT=3000

let app=express()

app.use(express.json())
app.use()
app.use("/task",taskrouter)

app.listen(PORT, () => {
    console.log((chalk.green.bold(`
        🚀 Express Server is Running
        🌍 http://localHost:${PORT}
        📅 Date : ${new Date().toLocaleTimeString()}
        `)));
  });