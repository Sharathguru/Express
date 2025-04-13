import { connect } from "mongoose";

// MongoDB connection
async function dB() {
    try {
        await connect("mongodb://localhost:27017/task", {
         
        });
        console.log("DB Connected Successfully!");
    } catch (error) {
        console.error("Database Connection Error:", error.message);
    }
}

export default dB;
