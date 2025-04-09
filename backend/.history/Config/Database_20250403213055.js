import {connect} from "mongoose"

const url=

async function dbConnection(){
try {
    await connect(,{

    })
} catch (error) {
    
}
}