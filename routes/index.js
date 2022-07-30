const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Doctor = require('../models/doctor');

router.post("/user", (req, res)=> {
    const { name, email, password,passwordConf} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.status(409).send({message: "User already registerd"})
        } else {
			if(password !== passwordConf){
				return res.status(409).send({message: "password doesnt match"})
			}
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.status(200).send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 


router.post("/user/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.status(200).send({message: "Login Successfull", user: user})
            } else {
                res.status(409).send({ message: "Password didn't match"})
            }
        } else {
            res.status(404).send({message: "User not registered"})
        }
    })
})

router.post("/doctor", (req, res)=> {
    const { name, email, password,passwordConf} = req.body
    Doctor.findOne({email: email}, (err, user) => {
        if(user){
            res.status(409).send({message: "User already registerd"})
        } else {
			if(password !== passwordConf){
				return res.status(409).send({message: "password doesnt match"})
			}
            const user = new Doctor({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.status(200).send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 


router.post("/doctor/login", (req, res)=> {
    const { email, password} = req.body
    Doctor.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.status(200).send({message: "Login Successfull", user: user})
            } else {
                res.status(409).send({ message: "Password didn't match"})
            }
        } else {
            res.status(404).send({message: "User not registered"})
        }
    })
})



	

module.exports = router;