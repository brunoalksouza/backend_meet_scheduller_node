const mongoose = require("mongoose");
const db = require("../config/db");
const bycrypt = require("bcrypt");

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function () {
  try {
    var user = this;
    const salt = await bycrypt.genSalt(10);
    const hashpass = await bycrypt.hash(user.password, salt);

    user.password = hashpass;
  } catch (error) {
    throw error;
  }
});

userSchema.methods.comparePassword = async function (userPassword) {
  try {
    const isMatch = await bycrypt.compare(userPassword, this.password);
    return isMatch;
  } catch (error) {
    throw error;
  }
};

const UserModel = db.model("users", userSchema);

module.exports = UserModel;
