import { connect } from "mongoose";

// MongoDB connection
async function dB() {
    try {
        await connect("mongodb://127.0.0.1:27017/testDB");
        console.log("DB Connected Successfully!");
    } catch (error) {
        console.error("Database Connection Error:", error);
    }
}

export default dB;
