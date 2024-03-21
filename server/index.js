const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel = require('./models/Employee')
const CommentModel = require('./models/Comment')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/employee");  

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Success")
            } else {
                res.status(400).json({ error: "Incorrect password" });
            }
        } else {
            res.json("No record Existed")
        }
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    });
});

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is working")
})

app.post('/comment', (req, res) => {
    CommentModel.create(req.body)
    .then(comments => res.json(comments))
    .catch(err => res.json(err))
})

app.listen(3007, () => {
    console.log("server is working")
})
