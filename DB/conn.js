import 'dotenv/config'
import mongoose from 'mongoose'

const user = process.env.USER
const password = process.env.PASSWORD
// const URI= `mongodb+srv://${user}:${password}@cluster0.tkj46.mongodb.net/name_and_address`

const URI = 'mongodb+srv://suvojitpal418:ibse71AsjgeAAGFw@cluster0.tkj46.mongodb.net/name_and_address'

mongoose.connect(URI).then(()=>{
    console.log("connection successful")
}).catch((err)=>{
    console.log("error:", err)
})