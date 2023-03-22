import express from "express";
import { Request, Response } from "express";
const router = express.Router();
import  FormData  from "../models/file.js";
router.use( express.json());


router.get('/getfiles', async (req, res) => {
    const checkDb = await FormData.find();

    try {
        if (checkDb) {
            res.status(200).json(checkDb);
        }
    } catch (error) {
        console.error(error);
    }
});





router.post('/upload', async (req, res) => {
    const body = req.body;
    
    const checkDb = await FormData.find();
    try {
        
        console.log("Whole dB===:",checkDb);

        const checkifexist = checkDb.find((data) => data.user === body.user);
        
        console.log("checkifexist===",checkifexist?.user);
        if (checkifexist?.user === body.user) {
            console.log("found user")
                console.log("user have saved data");
                res.status(302).json("form already Saved"); 
            
        } else if (checkifexist?.user === undefined) {
            console.log("user not found");
                const formdata = new FormData(body);
                formdata.save();
                console.log(body,'Saved Data');
                res.status(201).json("success",); 
            
        }
        
    } catch (err) {
        console.error(err);
    }
});








export default router;