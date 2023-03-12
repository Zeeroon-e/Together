
import express, { Request, Response } from "express";
const router = express.Router();
import  User  from "../models/user.js";
// router.use( express.json());

router.get('/', async (req, res) => {
    
    try {

        const result = await User.find();
        console.log(result);
        res.json(result)
    } catch (err) {

        console.log(err);
    }
    
});


router.post('/login', async (req, res) => {
    
    try {
        const credentials = req.body;
        const user = await User.findOne(credentials); 

        if (user) {
            res.status(200).json(user)
            
        } else { 
          res.status(400).json("check if email and password are correct. If you dont have an account make sure to sign up")  
        }

    } catch (err) {
        console.error(err);
    }
});

router.post('/signup', async (req, res) => {
    const credentials = req.body;
    

    const users = await User.find();
    
    try {

        if (users) {

            const checkUser = users.find((user: { email: any; }) => user.email === credentials.email);
            
            if (!checkUser) {
                const user = new User(req.body);
                user.save();
                res.status(201).json({User: user});
            } else {

                console.log(checkUser.email + " is already in use");
                res.status(400).json("user already exists");
            }
                
        }

    } catch (err) {
        console.error(err);
    }
});

export default router;
