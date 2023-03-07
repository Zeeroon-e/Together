
const express = require('express');
const router = express.Router();
const User = require('../models/user');
router.use( express.json());
router.get('/', async (req, res) => {
    
    const result = await User.find();
    res.send({"Users": result})
});


router.post('/login', async (req, res) => {
     const credentials = req.body;
     const check = await User.find(credentials);
    
        console.log(check)
    
    try {
        

       if (check) {
        console.log(check);
        
        res.status(200).json(check);
        
       }
       if (!check) {
        res.status(200).json("user doesnt exist");
       }
        
        

        // console.log(credentials.email)
        // users.forEach(user => {
        
        //     if (user.email == credentials.email && user.password == credentials.password) {
        //         console.log("Found: ", user)
        //         res.status(200).json(user)
        //         return;
                
        //     } 
        // });
        // res.status(400).json("bad")
    } catch (err) {
        console.error(err);
    }
});

router.post('/signup',  (req, res) => {
    console.log(req.body);
    const user = new User(req.body);
    try {
       user.save(); 
       res.status(201).json({user: user});

    } catch (err) {
        log.error(err);
    }
});

module.exports = router;
