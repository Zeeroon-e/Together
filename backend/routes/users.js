
const express = require('express');
const router = express.Router();
const User = require('../models/user');
router.use( express.json());
router.get('/', async (req, res) => {
    
    const result = await User.find();
    res.send({"Users": result})
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

module.exports = router;
