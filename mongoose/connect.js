const mongoose = require("mongoose");
const db = mongoose.connection;

function connect(user, password, host, db_name) {
  let connectionString = `mongodb://${user}:${password}@${host}/${db_name}`;
  mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => {
      console.log(err);
    });
}

function onConnect(callback) {
  db.once("connecting", function () {
    console.log("connecting to mongo db...");
  });
  db.once("connected", function () {
    console.log("connected to mongo db...");
  });
  db.once("open", function () {
    console.log("mongo db connection open");
    callback();
  });
  db.on("error", function (err) {
    console.log("error connecting to mongo db");
  });
}

module.exports = {
  connect: connect,
  onConnect: onConnect,
};
