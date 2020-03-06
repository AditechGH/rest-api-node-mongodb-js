import morgan from "morgan";
import { json, urlencoded } from "body-parser";
import compression from "compression";
import helmet from "helmet";
import passport from "passport";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

const options = {
  customCss: '.swagger-ui .topbar { display: none }'
};

const isDev = process.env.NODE_ENV === "development";
const isProd = process.env.NODE_ENV === "production";

export default app => {
  if (isProd) {
    app.use(compression());
    app.use(helmet());
  }

  app.use(json());
  app.use(
    urlencoded({
      extended: true
    })
  );
  app.use(cors({ credentials: true, origin: true }));
  app.use(passport.initialize());
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

  if (isDev) {
    app.use(morgan("dev"));
  }
};
