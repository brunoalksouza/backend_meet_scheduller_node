import { Request, Response, NextFunction } from "express";
import UserService from "../services/user.services";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const successRes = await UserService.RegisterUser(email, password);

    res.json({ status: true, success: "user registered successfully" });
  } catch (error) {
    throw error;
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const user = await UserService.checkUser(email);

    if (!user) {
      return res.json({ status: false, error: "user not found" });
    }

    const isMatch = await user.comparePassword(password);

    if (isMatch === false) {
      throw new Error("Password not match");
    }

    const tokenData = { _id: user._id, email: user.email };
    const token = await UserService.generateToken(tokenData, "secretKey", "1h");

    res.json({ status: true, token });

    return isMatch;
  } catch (error) {
    throw error;
  }
};
