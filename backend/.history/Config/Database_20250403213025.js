import {connect} from "mongoose"

async function dbConnection(){
try {
    await connect("mongodb://127.0.0.1:27017/DbData",{
        
    })
} catch (error) {
    
}
}