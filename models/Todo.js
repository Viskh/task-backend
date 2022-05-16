const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    
    text: {
      type: String,
      required: true,
    },

    completed: {
      type: Boolean,
      default: false,
    },

    category: {
      ref: "Category",
      type: mongoose.SchemaTypes.ObjectId,
    },

    user: {
      ref: "User",
      type: mongoose.SchemaTypes.ObjectId,
    },
  },
  { timestamps: true }
);

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
