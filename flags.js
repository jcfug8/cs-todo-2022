flags = require("flags");

flags.defineString("port", "8080", "the port name the server runs on");
flags.defineString("mongoUser", "new_user", "the username for the mongo db");
flags.defineString(
  "mongoPassword",
  "password",
  "the password for the mongo db"
);
flags.defineString("mongoHost", "localhost", "the hostname for the mongo db");
flags.defineString(
  "mongoDbName",
  "cs-todo-2022",
  "the name of the mongo database"
);
flags.parse();

module.exports = flags;
