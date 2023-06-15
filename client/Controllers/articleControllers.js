import {
  Article,
  addArticleValidate,
  articleEditValidate,
} from "../models/Articles.js";
import { catchError } from "../utils/catchAsyncError.js";

let getArticles = catchError(async (request, response, next) => {
  const articles = await Article.find({});
  response.status(200).json({
    articles,
  });
});

let getArticleById = catchError(async (request, response, next) => {
  const article = await Article.findById(request.params.id);
  if (!article) {
    return response.status(400).json({ message: "article not found" });
  }
  response.status(200).json({
    article,
  });
});
let getArticleByType = catchError(async (request, response, next) => {
  const articles = await Article.find({ type: request.params.type });
  if (!articles) {
    return response.status(400).json({ message: "articles not founded" });
  }
  response.status(200).json({
    articles,
  });
});
let addArticle = catchError(async (request, response, next) => {
  const { error } = addArticleValidate(request.body);
  if (error) {
    return response.status(400).json({ message: error.details[0].message });
  }

  if (request.file === undefined) {
      let error = new Error("upload Image Only 🙄");
    error.status = 400;
    return next(error);
  }
  const {article} = await Article.insertMany({
    "header": request.body.header,
    "body":  request.body.body,
    "image":  request.file.filename,
    "hint": request.body.hint,
    "show":  request.body.show,
    "type":  request.body.type
});
  response.status(200).json({
    message: "Added Article Successfully",
    article,
  });
});

let deleteArticle = catchError(async (req, res) => {
  if (!req.params.id) {
    return res.status(400).json({ message: "invalid id" });
  }
  const existed = await Article.findById(req.params.id);
  if (!existed) {
    return res.status(400).json({ message: "article not found" });
  }
  const article = await Article.findByIdAndDelete(req.params.id);
  res.status(201).json(article.header + " deleted");
});

let updateArticle = catchError(async (request, res,next) => {
  console.log(request.body)
  const { error } = articleEditValidate(request.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  const article = await Article.findOneAndUpdate(
    request.params.id,{
    "header": request.body.header,
    "body":  request.body.body,
    "image":  request.file?.filename,
    "hint": request.body.hint,
    "show":  request.body.show,
    "type":  request.body.type
});
  res.status(200).json({messae:'update is done',article});
});

export {
  getArticles,
  getArticleById,
  getArticleByType,
  addArticle,
  updateArticle,
  deleteArticle,
};
