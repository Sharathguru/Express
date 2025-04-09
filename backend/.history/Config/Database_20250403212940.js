import {connect} from "mongoose"

async function dbConnection(){
try {
    await connect("mongodb")
} catch (error) {
    
}
}