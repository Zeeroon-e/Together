const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const usersRoute = require('./routes/users');
const cors = require('cors');

dotenv.config();
const app = express();
mongoose.set('strictQuery', false);
app.use( express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3005;
const URI = process.env.URI || 'mongodb+srv://togetheradmin:together9898@firstcluster.xhz64cl.mongodb.net/together?retryWrites=true&w=majority';



app.use(cors());

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

