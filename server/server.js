const express = require("express");
const cors = require("cors");
const server = express();

const Todo = require("../mongoose/model");
const { setupTodo } = require("./server-helpers");

// server.use(cors());
// server.use(express.json({}));
// server.use(express.static(`${__dirname}/public/`));

server.get("/todo/:id", (req, res) => {
  Todo.findById(req.params.id)
    .then((todo) => {
      if (todo == null) {
        res.status(404).json({ message: "Todo not found" });
        return;
      }
      res.json(todo);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

server.get("/todos", (req, res) => {
  Todo.find()
    .then((todos) => {
      res.json(todos);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

server.post("/todo", (req, res) => {
  // validate and default the params in the body
  let todoReqData = setupTodo(req.body);
  const todo = new Todo(todoReqData);
  Todo.create(todo)
    .then((todo) => {
      res.json(todo);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

server.put("/todo/:id", (req, res) => {
  // validate and default the params in the body
  let todoReqData = setupTodo(req.body);
  Todo.findByIdAndUpdate(req.params.id, todoReqData, { new: true })
    .then((todo) => {
      if (todo == null) {
        res.status(404).json({ message: "Todo not found" });
        return;
      }
      res.json(todo);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

server.patch("/todo/:id", (req, res) => {
  // validate the params in the body
  Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((todo) => {
      if (todo == null) {
        res.status(404).json({ message: "Todo not found" });
        return;
      }
      res.json(todo);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = server;
