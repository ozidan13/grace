import { User, userEditValidate } from "../models/User.js";
import { catchError } from "../utils/catchAsyncError.js";

let getAllUsers = catchError(async (req, res) => {
  const users = await User.find(
    {},
    { password: 0, __v: 0, createdAt: 0, updatedAt: 0 }
  );
  res.status(200).json(users);
});
let getUserById = catchError(async (req, res) => {
  const user = await User.findById(req.params.id, {
    password: 0,
    __v: 0,
    createdAt: 0,
    updatedAt: 0,
  });
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }
  res.status(200).json(user);
});
let updateUserById = catchError(async (req, res) => {
  console.log(req)
  const { error } = userEditValidate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  let { disease } = req.body;
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        disease: disease,
        answerQuestuions: true,
      },
    },
    { new: true }
  );
  res.status(200).json(user);
});
let deleteUserById = catchError(async (req, res) => {
  if (!req.params.id) {
    return res.status(400).json({ message: "invalid id" });
  }
  const existed = await User.findById(req.params.id);
  if (!existed) {
    return res.status(400).json({ message: "user not found" });
  }
  const user = await User.findByIdAndDelete(req.params.id);
  res.status(201).json(user.fName + " deleted");
});
export { getAllUsers, getUserById, updateUserById, deleteUserById };
