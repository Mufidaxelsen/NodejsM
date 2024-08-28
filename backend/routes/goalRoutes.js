const express = require('express')
const router = express.Router()
const {getGoals,setGoal} = require("../controllers/goalController")


router.get('/', (req, res) => {
    res.status(200).json({
        name: 'Muhammad Mufid'
    })
})

router.put('/'),(req,res) => {
    res.json({
        message: "menambahkan method put"
    })
}

module.exports =  router