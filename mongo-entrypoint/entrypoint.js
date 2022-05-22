var db = connect("mongodb://user:password@localhost:27017/admin");

db = db.getSiblingDB("cs-todo-2021");

db.createUser({
  user: "new_user",
  pwd: "password",
  roles: [{ role: "readWrite", db: "cs-todo-2021" }],
  passwordDigestor: "server",
});
