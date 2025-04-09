import mongoose from "mongoose";
import chalk from "chalk";

let url="mongodb://127.0.0.1:27017/DbDatas"

async function name() {
    try {
        await mongoose.connect(url)
        console.log(());
        
    } catch (error) {
        
    }
}