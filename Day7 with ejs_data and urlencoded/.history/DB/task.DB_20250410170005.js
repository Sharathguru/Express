import { connect } from "mongoose";

// MongoDB connection
async function dB() {
    try {
        await connect("mongodb+srv://skv200219:qJf4LZXoFui7WtdR@cluster0.owgywmv.mongodb.net/toduDB1?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("DB Connected Successfully!");
    } catch (error) {
        console.error("Database Connection Error:", error.message);
    }
}

export default dB;
