import express from "express";
import { Request, Response } from "express";
import multer from "multer";
const router = express.Router();
import  FormData  from "../models/file.js";

router.use( express.json());

const storage = multer.memoryStorage();
const upload = multer({storage: storage});

upload.single('image');

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

router.post('/upload/file', upload.single('image'), async (req, res) => {
    console.log("body :",req.body);
    console.log("file :",req.file);

    res.status(200).json(req.body);
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
            res.status(201).json("Uploaded Data",);     
        }
        
    } catch (err) {
        console.error(err);
    }
});








export default router;