const router = require('express').Router()
const userRoutes = require('../routes/user')
const nasaRoutes = require('../routes/nasa')
const {Authenticate} = require('../middleware/authentication')

router.use('/users', userRoutes)
router.use(Authenticate)
router.use('/apods', nasaRoutes)

module.exports = router