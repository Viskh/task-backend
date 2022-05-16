const { Router } = require('express')
const { categoriesController } = require('../controllers/categories.controller')
const authMiddlewares = require('../middlewares/auth.middlewares')

const router = Router()

router.get('/categories', authMiddlewares, categoriesController.getAllCategories)
router.post('/categories', authMiddlewares, categoriesController.createCategory)
router.patch('/categories/:id', authMiddlewares, categoriesController.updateCategory)
router.delete('/categories/:id', authMiddlewares, categoriesController.removeCategory)

module.exports = router