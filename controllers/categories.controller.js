const Category = require("../models/Category");

module.exports.categoriesController = {
  getAllCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      res.json(categories);
    } catch (e) {
      res.json(e.message);
    }
  },

  createCategory: async (req, res) => {
    try {
      const category = await Category.create({
        name: req.body.name,
      });
      res.json(category);
    } catch (e) {
      res.json(e.message);
    }
  },

  updateCategory: async (req, res) => {
    try {
      const category = await Category.findByIdAndUpdate(
        req.params.id,
        {
          name: req.body.name,
        },
        { new: true }
      );

      res.json(category);
    } catch (e) {
      res.json(e.message);
    }
  },

  removeCategory: async (req, res) => {
    try {
      await Category.findByIdAndRemove(req.params.id);
      res.json("Категория успешно удалена!");
    } catch (e) {
      res.json(e.message);
    }
  },
};
