const { connect, onConnect } = require("./mongoose/connect.js");
const serverListen = require("./server/server");
const flags = require("./flags");

// set up on connect
onConnect(function () {
  serverListen(flags.get("port"), () => {
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
