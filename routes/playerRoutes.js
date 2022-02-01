const playerController=require('../controllers/playerController')

// router
const router = require('express').Router()

router.get('/allPlayers', playerController.getAllPlayers)

router.post('/create', playerController.AddBulkPlayers) 

module.exports=router