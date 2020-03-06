import { Router } from "express";
import validate from "express-validation";
import * as postController from "./post.controllers";
import validations from "./post.validations";
import { authJwt } from "../../services/auth.services";

const routes = Router();

routes.post(
  "/",
  authJwt,
  validate(validations.createPost),
  postController.createPost_
);
routes.get("/:id", authJwt, postController.getPostById);
routes.get("/", authJwt, postController.getPostsList);
routes.patch(
  "/:id",
  authJwt,
  validate(validations.updatePost),
  postController.updatePost
);
routes.delete("/:id", authJwt, postController.deletePost);
routes.post("/:id/favorite", authJwt, postController.favoritePost);

export default routes;
