import express from "express";
import { Request, Response } from "express";
const router = express.Router();
import  FormData  from "../models/file.js";
router.use( express.json());








router.post('/upload', async (req, res) => {
    const body = req.body;
    
    const checkDb = await FormData.find();
    try {
        

        if (checkDb) {
            const checkifexist = checkDb.find((data) => data.__id === body.__id);
            
            if (!checkifexist) {
                const formdata = new FormData(body);
                formdata.save();
                console.log(body,'Saved Data');
                res.status(201).json("success",);
                
            } else {
                res.status(302).json("form already Saved");    
            }
            
        } else{
            res.status(404).json("Not found");
        }
        
    } catch (err) {
        console.error(err);
    }
});








export default router;