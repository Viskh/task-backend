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

  getTodosByUser: async (req, res) => {
    try {
      const todos = await Todo.find({ user: req.params.id });
      res.json(todos);
    } catch (e) {
      res.json(e.message);
    }
  },

  createTodo: async (req, res) => {
    try {
      const todo = await Todo.create({
        title: req.body.title,
        text: req.body.text,
        user: req.body.user,
        category: req.body.category,
      });
      res.status(201).json(todo);
    } catch (e) {
      res.json(e.message);
    }
  },

  updateTodo: async (req, res) => {
    try {
      const todo = await Todo.findByIdAndUpdate(
        req.params.id,
        {
          title: req.body.title,
          text: req.body.text,
          completed: req.body.completed,
          category: req.body.category
        },
        { new: true }
      );

      res.json(todo);
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
