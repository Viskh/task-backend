const Todo = require("../models/Todo");

module.exports.todosController = {
  getAllTodos: async (req, res) => {
    try {
      const todos = await Todo.find();
      res.json(todos);
    } catch (e) {
      res.json(e.message);
    }
  },

  createTodo: async (req, res) => {
    try {
     const todo = await Todo.create({
        text: req.body.text,
        completed: false,
      });
      res.status(201).json(todo);
    } catch (e) {
      res.json(e.message);
    }
  },

  updateTodo: async (req, res) => {
    try {
      await Todo.findByIdAndUpdate(req.params.id, {
        text: req.body.text,
        completed: req.body.completed,
      });
      res.json("Дело успешно изменено!");
    } catch (e) {
      res.json(e.message);
    }
  },

  removeTodo: async (req, res) => {
    try {
      await Todo.findByIdAndRemove(req.params.id);
      res.json("Дело успешно удалено");
    } catch (e) {
      res.json(e.message);
    }
  },
};
