import express from "express"
import chalk from "chalk";
import taskrouter from "./Router/index.router";
import Datadb from ""


//Port Number
let PORT=3000

let app=express()

app.use(express.json())

app.use("/task",taskrouter)

app.listen(PORT, () => {
    console.log((chalk.green.bold.bgRedBright(`
        🚀 Express Server is Running
        🌍 http://localHost:${PORT}
        📅 Date : ${new Date().toLocaleTimeString()}
        `)));
  });