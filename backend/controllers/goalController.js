const getGoals = (req,res)=> {
    res.status(200).json({
        message: "Get Goal"
    })
}

const setGoals = (req,res) => {
    res.status(200).json({
        message: "Set Goal"
    })
}

module.exports = { getGoals, setGoals}