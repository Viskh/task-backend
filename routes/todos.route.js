const { Router } = require('express')
const { todosController } = require('../controllers/todos.controller')

const router = Router()

router.get('/todos', todosController.getAllTodos)
router.post('/todos', todosController.createTodo)
router.patch('/todos/:id', todosController.updateTodo)
router.delete('/todos/:id', todosController.removeTodo)

module.exports = router