import express from "express"
import {connect, Schema} from "mongoose";

let app = express()

//mongodb connection
async function dB()
{
    try {
        await connect("mongodb://127.0.0.1:27017/testDB")
        console.log("db connected");
    } catch (error) {
        console.log("error",error);
    }
}
dB()

//model the database
let taskSchema=new Schema({
    task:String
})

//



export default app;


