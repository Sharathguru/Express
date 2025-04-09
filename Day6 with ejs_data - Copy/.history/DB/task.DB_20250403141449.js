import { connect } from "mongoose";

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