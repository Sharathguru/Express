import mongoose from "mongoose";
import chalk from "chalk";

let url="mongodb://127.0.0.1:27017/DbDatas"

async function Datadb() {
    try {
        await mongoose.connect(url)
        console.log(chalk.green("✅ Connected to Database"));
    } catch (error) {
        console.log(chalk.red("❌ DB connection failed:"), error);
        }
}
export default Datadb;

