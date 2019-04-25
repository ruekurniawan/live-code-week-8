const router = require('express').Router()
const nasaController = require('../controllers/nasaController')

router.post('/', nasaController.create)
router.get('/', nasaController.findAll)

module.exports = router