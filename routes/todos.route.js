const { Router } = require('express')
const { todosController } = require('../controllers/todos.controller')
const authMiddlewares = require('../middlewares/auth.middlewares')

const router = Router()

router.get('/todos', authMiddlewares, todosController.getAllTodos)
router.get('/todos/:id', authMiddlewares, todosController.getTodosByUser)
router.post('/todos', authMiddlewares, todosController.createTodo)
router.patch('/todos/:id', authMiddlewares, todosController.updateTodo)
router.delete('/todos/:id', authMiddlewares, todosController.removeTodo)

module.exports = router