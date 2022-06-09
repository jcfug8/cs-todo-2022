setupTodo = function (todoReq) {
  let deadline;
  let done;
  if (todoReq.deadline) {
    deadline = new Date(todoReq.deadline);
  }
  if (todoReq.done || todoReq.done === false) {
    done = todoReq.done;
  }
  return {
    name: todoReq.name || "",
    description: todoReq.description || "",
    done: done,
    deadline: deadline,
    tags: todoReq.tags || [],
  };
};

module.exports = {
  setupTodo,
};
