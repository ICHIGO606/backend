// require('dotenv').config({path: './env'})
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
    path: './env'
})

connectDB();














// import express from 'express'
// const app = express();
// (async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERROR",error);
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`APP is listening on port ${process.env.PORT}`);
//         })
//     }
//     catch{
//         console.error("Error",error)
//         throw err;
//     }
// })()