import {connect} from "mongoose"

async function dbConnection(){
try {
    connect("mongoDB")
} catch (error) {
    
}
}