import { Model } from "mongoose";
import UserModel, { IUser } from "../model/user.model";
import jwt from "jsonwebtoken";

class UserService {
  static async RegisterUser(email: string, password: string): Promise<IUser> {
    try {
      const createUser = new UserModel({ email, password });
      return await createUser.save();
    } catch (err) {
      throw err;
    }
  }

  static async checkUser(email: string): Promise<IUser | null> {
    try {
      return await UserModel.findOne({ email });
    } catch (error) {
      throw error;
    }
  }

  static generateToken(
    tokenData: any,
    secretKey: string,
    jwt_expire: string
  ): string {
    return jwt.sign(tokenData, secretKey, { expiresIn: jwt_expire });
  }
}

export default UserService;
