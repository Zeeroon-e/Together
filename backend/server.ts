const express = require('express');
const mongoose = require('mongoose');
const app = express();

const uri = 'mongodb+srv://togetheradmin:together9898@firstcluster.xhz64cl.mongodb.net/?retryWrites=true&w=majority'

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
        
    } catch (err) {
        console.log(err);
        
    }

}

connect();
app.listen(8000, () => {
    console.log("Server started on port 8000");
})
