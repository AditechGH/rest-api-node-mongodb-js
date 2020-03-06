import adminRoutes from "./admin/admin.routes";
/* import postRoutes from "./post/post.routes"; */
import userRoutes from "./user/user.routes";
import courierRoutes from "./courier/courier.routes";
import addressRoutes from "./address/address.routes";

export default app => {
  app.use("/api/v1/admin", adminRoutes);
  /* app.use("/api/v1/posts", postRoutes); */

  app.use("/api/v1/courier", courierRoutes);
  app.use("/api/v1/user", userRoutes);
  app.use("/api/v1/address", addressRoutes);
};
