const mongoose = require("mongoose");

const connection = mongoose
  .createConnection(
    "mongodb+srv://flutter:flutter_admin@fluttercluster.a8jm0fw.mongodb.net/room_meet_scheduller"
  )
  .on("open", () => {
    console.log("mongodb connected");
  })
  .on("error", () => {
    console.log("mongodb error");
  });

module.exports = connection;
