import {connect} from "mongoose"

async function dbConnection(){
try {
    connect("mongodb")
} catch (error) {
    
}
}