import { User, userRegisterValidate, validateLogin } from "../models/User.js";
import { catchError } from "../utils/catchAsyncError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
let register = catchError(async (req, res) => {
  const { error } = userRegisterValidate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  let checkEmail = await User.findOne({ email: req.body.email });
  if (checkEmail) {
    return res.status(400).json({ message: "Email already exists" });
  }
  const { username, age, email, password } = req.body;
  const user = new User({
    username: username,
    age: age,
    email: email,
    password: password,
    isAdmin: false,
  });
  const savedUser = await user.save();
  res.send({
    id: savedUser._id,
    email: savedUser.email,
  });
});
let login = catchError(async (req, res) => {
  console.log(req.body)
  const { error } = validateLogin(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).json({ message: "invalid email or password" });
  }
  if (!( req.body.password == user.password)) {
    return res.status(400).json({ message: "invalid email or password" });
  }
  const token = jwt.sign(
    { user, isAdmin: user.isAdmin },
    process.env.JWT_SECRET,
  );
  res.send({
    isAdmin: user.isAdmin,
    id: user._id,
    disease: user.disease,
    answerQuestuions:user.answerQuestuions,
    token: token,
  });
});

export { register, login };
