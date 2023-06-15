import { Schema, model } from "mongoose";
const homeElement = new Schema({
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

const HomeElement = model("homeElement", homeElement);

export { HomeElement };
