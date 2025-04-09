import express from "express"
import chalk from ;

//Port Number
let PORT=3000

let app=express()






app.listen(PORT, () => {
    console.log(chalk.blue(`
    🚀 Server Started Successfully!
    🌐 Listening on: http://localhost:${PORT}
    ⏰ Time: ${new Date().toLocaleTimeString()}
    `));
  });