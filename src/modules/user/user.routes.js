import { Router } from "express";
import validate from "express-validation";
import * as userController from "./user.controllers";
import validations from "./user.validations";
import { authUserLocal, authJwt } from "../../services/auth.services";

const routes = Router();

routes.post(
  "/register",
  validate(validations.register),
  userController.createUser
);
routes.get("/resend/:id", userController.resendSmsToken);
routes.put("/verify/:id", validate(validations.verify), userController.verifySmsToken);
routes.post("/login", authUserLocal, userController.login);
routes.post(
  "/forgot-password",
  validate(validations.forgotPassword),
  userController.forgotPassword
);
routes.post(
  "/reset-password",
  validate(validations.resetPassword),
  userController.resetPassword
);
routes.patch(
  "/change-password",
  validate(validations.changePassword),
  authJwt,
  userController.changePassword
);
routes.patch(
  "/update-user",
  validate(validations.update),
  authJwt,
  userController.updateUser
);

export default routes;
