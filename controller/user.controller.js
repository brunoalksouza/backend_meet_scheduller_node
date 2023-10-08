const UserService = require("../services/user.services");

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const succesRes = await UserService.RegisterUser(email, password);

    res.json({ status: true, succes: "User registered Succesfully" });
  } catch (error) {
    throw error;
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // console.log(user);

    const User = await UserService.checkUser(email);
    // console.log(user);

    if (!User) {
      return res.json({ status: false, error: "User not found" });
    }

    const isMatch = await User.comparePassword(password);

    if (isMatch === false) {
      throw new Error("Password not match");
    }

    let tokenData = { _id: User._id, email: User.email };

    const token = await UserService.generateToken(tokenData, "secretKey", "1h");

    res.status(200).json({ status: true, token });

    return isMatch;
  } catch (error) {
    throw error;
  }
};
