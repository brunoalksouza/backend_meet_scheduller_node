const EventsModel = require("../model/event.model");
const UserModel = require("../model/user.model");
const jwt = require("jsonwebtoken");

class UserService {
  static async RegisterUser(email, password) {
    try {
      const createUser = new UserModel({ email, password });
      return await createUser.save();
    } catch (err) {
      throw err;
    }
  }

  static async checkUser(email) {
    try {
      return await UserModel.findOne({ email });
    } catch (error) {
      throw error;
    }
  }

  static async generateToken(tokenData, secretKey, jwt_expire) {
    return jwt.sign(tokenData, secretKey, { expiresIn: jwt_expire });
  }

  static async addEvent(title, description, date, formatedDate, start, end) {
    try {
      const createEvent = new EventsModel({
        title,
        description,
        date,
        formatedDate,
        start,
        end,
      });
      return await createEvent.save();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;
