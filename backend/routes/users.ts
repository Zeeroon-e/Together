
import express, { Request, Response } from "express";
const router = express.Router();
import  User  from "../models/user.js";
 router.use( express.json());

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

            const checkUser = users.find((user) => user.email === credentials.email);
            
            if (!checkUser) {

                if (credentials.email.length > 6 && credentials.email.includes("@")) {

                    if (credentials.password.length > 6) {
                        const user = new User(req.body);
                        user.save();
                        res.status(201).json({User: user}); 
                    } else {
                        res.status(411).json("password must be more then 6 letters");
                    }
                    
                } else {
                    res.status(411).json("email must be more then 6 letters and include @");
                }
                
            } else {
                res.status(302).json("user already exists");
            }
                
        }

    } catch (err) {
        console.error(err);
    }
});

export default router;
