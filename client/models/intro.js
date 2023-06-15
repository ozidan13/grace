import { Schema, model } from "mongoose";

const introEle = new Schema({
  header: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  body: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
});

const IntroEle = model("introEle", introEle);

export { IntroEle };
