const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  name: { type: String },
  description: { type: String },
  done: { type: Boolean, default: false },
  deadline: { type: Date, default: new Date() },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
