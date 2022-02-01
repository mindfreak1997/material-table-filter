const db=require('../models')
const { Op } = require("sequelize");

const Player=db.players

const AddBulkPlayers= async (req,res)=>{
    let players= await Player.bulkCreate(req.body)
    res.status(200).send(players)
}
const getAllPlayers = async (req, res) => {

    let players = await Player.findAll({})
    res.status(200).send(players)

}


module.exports={
    getAllPlayers,
    AddBulkPlayers
}