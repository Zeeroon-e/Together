import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import usersRoute from './routes/users.js';
import cors from 'cors';
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

dotenv.config();
const app = express();

mongoose.set('strictQuery', false);
app.use( express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const PORT = process.env.PORT || 3005;
const URI = process.env.URI || 'mongodb+srv://togetheradmin:together9898@firstcluster.xhz64cl.mongodb.net/together?retryWrites=true&w=majority';

const __dirname = dirname(fileURLToPath(import.meta.url));  
const staticPath = join( __dirname, '../../dist' )

app.use( express.static(staticPath) )
app.use(cors({ origin: '*' }));

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

