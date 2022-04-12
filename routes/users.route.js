const { Router } = require('express')
const { usersController } = require('../controllers/users.constroller')

const router = Router()

router.get('/users', usersController.getAllUsers)
router.post('/users/signup', usersController.registerUser)
router.post('/users/signin', usersController.login)


module.exports = router