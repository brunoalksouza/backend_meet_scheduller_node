const mongoose = require("mongoose");
const db = require("../config/db");
const bycrypt = require("bcrypt");

const { Schema } = mongoose;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  start: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
  },
});

const EventsModel = db.model("events", eventSchema);

module.exports = EventsModel;
