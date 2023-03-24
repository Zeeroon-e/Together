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
    
    try {
        const body = req.body;
    
        const checkDb = await FormData.find();

        console.log("Whole dB===:",checkDb);

        const checkifexist = checkDb.find((data) => {
         return data.user === body.user   
        });
        
        console.log("checkifexist===",checkifexist);
        if (checkifexist !== undefined) {

            console.log("user have saved data");
            res.status(302).json("form already Saved");        
        } else {

            const formdata = new FormData(body);
            formdata.save();
            console.log(body,'Saved Data');
            console.log("body===",body)
            res.status(201).json("Uploaded Data",);     
        }
        
    } catch (err) {
        console.error(err);
    }
});








export default router;