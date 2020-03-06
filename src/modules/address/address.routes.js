import { Router } from "express";
import validate from "express-validation";
import * as addressController from "./address.controllers";
import validations from "./address.validations";
import {
  authJwt
} from "../../services/auth.services";

const routes = Router();

routes.post(
  "/",
  authJwt,
  validate(validations.createAddress),
  addressController.createAddress
);
routes.get("/:id", authJwt, addressController.getAddressById);
routes.get("/", authJwt, addressController.getUserAddresses);
routes.patch(
  "/:id",
  authJwt,
  validate(validations.updateAddress),
  addressController.updateAddress
);
routes.delete("/:id", authJwt, addressController.deleteAddress);

export default routes;
