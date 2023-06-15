import { Schema, model } from "mongoose";
// import { object, string, boolean } from("joi");
import Joi from "joi";
const articleSchema = new Schema({
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
  image: {
    type: String,
    required: true,
  },
  hint: {
    type: String,
    required: true,
  },
  show: {
    type: Boolean,
    required: true,
    default: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const Article = model("Article", articleSchema);
function addArticleValidate(obj) {
  const schema = Joi.object({
    header: Joi.string().trim().min(3).required(),
    body: Joi.string().trim().min(3).required(),
    // image: Joi.string().trim().required(),
    hint: Joi.string().trim().required(),
    type: Joi.string().required(),
  });
  let error;

  return ({ error } = schema.validate(obj));
}
function articleEditValidate(obj) {
  const schema = Joi.object({
    header: Joi.string().trim().min(3).optional(),
    body: Joi.string().trim().min(3).optional(),
    // image: Joi.string().trim().optional(),
    hint: Joi.string().trim().optional(),
    show: Joi.boolean().optional(),
    type: Joi.string().optional(),
  });
  let error;
  return ({ error } = schema.validate(obj));
}

export { Article, addArticleValidate, articleEditValidate };
