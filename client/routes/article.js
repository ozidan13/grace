import { Router } from "express";
import { verifyAdmin } from "../middlewares/verifyToken.js";
import {
  getArticles,
  getArticleById,
  getArticleByType,
  addArticle,
  updateArticle,
  deleteArticle,
} from "../Controllers/articleControllers.js";
import { fileUpload } from "../utils/fileUpload.js";
/*
 * @desc get all articles
 * @route GET /articles
 * @access public
 */

const router = Router();

router.get("/articles", getArticles);
/*
 * @desc get  article by id
 * @route GET /articles/:id
 * @access public
 */
router.get("/articles/:id", getArticleById);
/*
 * @desc get  article by type
 * @route GET /articles/type/:type
 * @access public
 */
router.get("/articles/type/:type", getArticleByType);

/*
 * @desc add article
 * @route POST /articles/
 * @access private
 */
router.post("/articles",fileUpload('image'), verifyAdmin, addArticle);
// router.post("/articles",fileUpload('image'), verifyAdmin, addArticle);

/*
/*
 * @desc update article
 * @route PUT /articles/:id
 * @access private
 */
router.put("/articles/:id",fileUpload('image'), verifyAdmin, updateArticle);

/*
 * @desc delete article
 * @route Delete /articles/:id
 * @access private
 */
router.delete("/articles/:id", verifyAdmin, deleteArticle);

export default router;
