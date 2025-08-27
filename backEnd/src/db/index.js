import mongoose from "mongoose";
import { app } from "../app.js";
import DB_NAME from "../constants.js";
import { error } from "console";



const dbConnection = async()=>{
    try {

        const connInstance = await mongoose.connect(`mongodb+srv://healzenic:healzenic@healtheterminator.syrj7.mongodb.net/?retryWrites=true&w=majority&appName=HealTheTerminator`)

        app.on(error,(req,res,err)=>{
            console.log(`DB Connected but not able to Communicate!`,err);
        })

        console.log(`Connected to Database `,connInstance.connection.host);
        
    } catch (error) {
        console.log("ERROR in DB Folder: ",error);
        process.exit(1);
    }
}

export default dbConnection