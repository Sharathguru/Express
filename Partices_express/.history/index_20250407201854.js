import express from "express"
import chalk from "chalk";

//Port Number
let PORT=3000

let app=express()






app.listen(PORT, () => {
    console.log(chalk.black((`
        🚀 Server Started Successfully!
        🌐 Listening on: http://localhost:${PORT}
        ⏰ Time: ${new Date().toLocaleTimeString()}
        `)));
  });