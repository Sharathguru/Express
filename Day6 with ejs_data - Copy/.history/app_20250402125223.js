import express from "express"
import mongoose from "mongoose";

let app = express()

async function dB()
{
    try {
        await mongoose.connect("mongodb://127")
    } catch (error) {
        
    }
}

export default app;


