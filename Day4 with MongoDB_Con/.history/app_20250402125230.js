import express from "express"
import mongoose from "mongoose";

let app = express()

async function dB()
{
    try {
        await mongoose.connect("mongodb://127.0.0.1:270")
    } catch (error) {
        
    }
}

export default app;


