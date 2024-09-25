import express from 'express'
import path from 'path';
import nameSchema from './models/nameSchema.js'
import addressSchema from './models/addressSchema.js';

const app = express()
const port = 3000
const __dirname = path.resolve()

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
import('./DB/conn.js')


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.post('/register', async (req, res) => {
   
    try{
        const {name, address} = req.body;
    
        const user_name = new nameSchema({ name });
        await user_name.save();
    
        const user_address = new addressSchema({ address, userId: user_name._id });
        await user_address.save()

        console.log("upload successful")
        return res.status(200).send("Registration successful");

    }catch(err){
        console.log(err)
        return res.status(500).send("Error registering the user");
    }
    
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



