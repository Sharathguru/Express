import express from "express"
import mongoose from "mongoose";

let app = express()

//mongodb connection
async function dB()
{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/testDB")
        console.log("db connected");
    } catch (error) {
        console.log("error",error);
    }
}
dB()




export default app;


