const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const usersRoute = require('./routes/users');



const app = express();
app.use( express.json());
const PORT = process.env.PORT;
const URI = process.env.URI;




app.use('/api/users', usersRoute);




async function connect() {
    try {
        await mongoose.connect(URI);
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
        console.log("Server started on port",PORT);
})
    } catch (err) {
        console.log(err);
        
    }

}

connect();

