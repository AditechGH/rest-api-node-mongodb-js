import { Router } from "express";
import validate from "express-validation";
import * as userController from "./admin.controllers";
import validations from "./admin.validations";
import { authAdminLocal } from "../../services/auth.services";

const routes = Router();

routes.post(
  "/register",
  validate(validations.register),
  userController.AddAdmin
);
routes.post("/login", authAdminLocal, userController.login);

export default routes;
