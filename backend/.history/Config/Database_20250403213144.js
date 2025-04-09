import {connect} from "mongoose"

const url="mongodb://127.0.0.1:27017/DbData"

async function dbConnection(){
try {
    await connect(url)
    console.log("connected to Database");
    } catch (error) {
    console.log(error);
}
}