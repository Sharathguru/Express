import {connect} from "mongoose"

async function dbConnection(){
try {
    connect("mongo")
} catch (error) {
    
}
}