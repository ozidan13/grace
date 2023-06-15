import { Schema, model } from "mongoose";
import Joi from "joi";
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },

    age: {
      type: Number,
      required: true,
      min: 1,
      max: 110,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      email: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 6,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    disease: {
      type: String,
      default: '',
    },
    answerQuestuions: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);
function userRegisterValidate(obj) {
  const schema = Joi.object({
    username: Joi.string().trim().min(3).required(),

    age: Joi.number().min(1).max(100).required(),
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().min(6).max(64).required(),
    isAdmin: Joi.boolean(),
    disease: Joi.string(),
  });
  let error;
  return ({ error } = schema.validate(obj));
}
function userEditValidate(obj) {
  const schema = Joi.object({
    disease: Joi.string(),
  });
  let error;
  return ({ error } = schema.validate(obj));
}
function validateLogin(obj) {
  const schema = Joi.object({
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().min(6).max(64).required(),
  });
  let error;
  return ({ error } = schema.validate(obj));
}

export { User, userRegisterValidate, userEditValidate, validateLogin };
