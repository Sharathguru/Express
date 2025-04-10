import { connect } from "mongoose";

// MongoDB connection
async function dB() {
    try {
        await connect("mongodb+srv://skv200219:<db_password>@cluster0.owgywmv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("DB Connected Successfully!");
    } catch (error) {
        console.error("Database Connection Error:", error.message);
    }
}

export default dB;
