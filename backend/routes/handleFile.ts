import express from "express";
import { Request, Response } from "express";
const router = express.Router();
import  FormData  from "../models/file.js";
router.use( express.json());








router.post('/upload', async (req, res) => {
    const body = req.body;
    
    // console.log(body);
    try {
        
        const formdata = new FormData(body);
        formdata.save();
        console.log(body,'ddddddddd');
        res.status(201).json("success",);
    } catch (error) {
        res.status(409).json(error);
    }
});








export default router;