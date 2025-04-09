import express from "express"
import chalk from "chalk";

//Port Number
let PORT=3000

let app=express()






app.listen(PORT, () => {
    console.log((chalk.green(`
        🚀 Express Server is Running
        🌍 http://localHost:${PORT}
        📅 Date : ${new Date().tol}
        `)));
    
  });