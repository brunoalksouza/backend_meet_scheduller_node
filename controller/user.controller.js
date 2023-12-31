const UserService = require("../services/user.services");

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const succesRes = await UserService.RegisterUser(email, password);

    res.json({ status: true, succes: "user registered Succesfully" });
  } catch (error) {
    throw error;
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // console.log(user);

    const user = await UserService.checkUser(email);
    // console.log(user);

    if (!user) {
      return res.json({ status: false, error: "user not found" });
    }

    const isMatch = await user.comparePassword(password);

    if (isMatch === false) {
      throw new Error("Password not match");
    }

    let tokenData = { _id: user._id, email: user.email };

    const token = await UserService.generateToken(tokenData, "secretKey", "1h");

    res.status(200).json({ status: true, token: token });

    return isMatch;
  } catch (error) {
    throw error;
  }
};
