/* eslint-disable no-console */

import mongoose from "mongoose";
import constants from "./constants";

mongoose.Promise = global.Promise;

try {
  mongoose.connect(constants.MONGO_URL, {
  	useNewUrlParser: true,
    useCreateIndex: true,
  });
} catch (err) {
  mongoose.createConnection(constants.MONGO_URL);
}
mongoose.connection
  .once("open", () => console.log("MongoDB Running"))
  .on("error", e => {
    throw e;
  });
