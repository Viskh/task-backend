const { Router } = require('express')

const router = Router()

router.use(require('./todos.route'))

module.exports = router