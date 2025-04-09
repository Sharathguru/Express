import { connect } from "mongoose";

// "Database connection URL"
const url = "mongodb://127.0.0.1:27017/DbData";

async function dbConnection() {
    try {
        // "Connecting to the database"
        await connect(url);
        console.log("connected to Database");
    } catch (error) {
        // "Log any connection errors"
        console.log(error);
    }
}

export default dbConnection;