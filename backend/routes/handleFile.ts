import express from "express";
import { Request, Response } from "express";
const router = express.Router();
import  File  from "../models/file.js";
router.use( express.json());



router.get('/', (req, res) => {
    try {
        File.find({}).then(data => {
            res.json(data);
        }).catch(error => {
            res.json({error})
        })
    } catch (error) {
        res.json({error})
    }
});




router.post('/upload', async (req, res) => {
    const body = req.body;
    try {
        const newImage = await File.create(body);
        newImage.save();
        res.status(201).json({msg : "new Image uploaded successfully"});
    } catch (error) {
        res.status(409).json(error);
    }
});








export default router;