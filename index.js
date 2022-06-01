const { connect, onConnect } = require("./mongoose/connect.js");
const server = require("./server/server");
const flags = require("./flags");

// set up on connect
onConnect(function () {
  server.listen(flags.get("port"), () => {
    console.log(`Server is running on port ${flags.get("port")}`);
  });
});

// connect db
connect(
  flags.get("mongoUser"),
  flags.get("mongoPassword"),
  flags.get("mongoHost"),
  flags.get("mongoDbName")
);
