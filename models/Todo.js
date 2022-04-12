const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },

    completed: {
      type: Boolean,
      default: false,
    },

    created: {
      type: Date,
      default: new Date(),
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
