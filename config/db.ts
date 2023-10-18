import mongoose, { Connection } from "mongoose";

const connection: Connection = mongoose.createConnection(
  "mongodb+srv://flutter:flutter_admin@fluttercluster.a8jm0fw.mongodb.net/room_meet_scheduller"
);

connection.on("open", () => {
  console.log("mongodb connected");
});

connection.on("error", () => {
  console.log("mongodb error");
});

export default connection;
