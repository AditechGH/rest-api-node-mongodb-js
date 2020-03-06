import { Router } from "express";
import validate from "express-validation";
import * as courierController from "./courier.controllers";
import validations from "./courier.validations";
import {
  authCourierLocal,
  authJwt
} from "../../services/auth.services";

const routes = Router();

routes.post(
  "/register",
  validate(validations.register),
  courierController.createUser
);
routes.get("/resend/:id", courierController.resendSmsToken);
routes.put(
  "/verify/:id",
  validate(validations.verify),
  courierController.verifySmsToken
);
routes.get("/resend-email/:id", courierController.resendEmail);
routes.put(
  "/confirm-email/:id",
  validate(validations.confirmEmail),
  courierController.confirmEmail
);
routes.post("/login", authCourierLocal, courierController.login);
routes.post(
  "/forgot-password",
  validate(validations.forgotPassword),
  courierController.forgotPassword
);
routes.post(
  "/reset-password",
  validate(validations.resetPassword),
  courierController.resetPassword
);
routes.patch(
  "/change-password",
  validate(validations.changePassword),
  authJwt,
  courierController.changePassword
);
routes.patch(
  "/update-user",
  validate(validations.update),
  authJwt,
  courierController.updateInfo
);

export default routes;
