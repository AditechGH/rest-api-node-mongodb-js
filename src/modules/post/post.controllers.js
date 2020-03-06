import status from "http-status";
import { createPost, findById, list } from "./post.model";
import Admin from "../admin/admin.model";

export async function createPost_(req, res) {
  try {
    const post = await createPost(req.body, req.user._id);
    return res.status(status.CREATED).json(post);
  } catch (e) {
    return res.status(status.BAD_REQUEST).json(e);
  }
}

export async function getPostById(req, res) {
  try {
    const promise = await Promise.all([
      Admin.findById(req.user._id),
      findById(req.params.id).populate("user")
    ]);

    const favorite = promise[0]._favorites.isPostIsFavorite(req.params.id);
    const post = promise[1];

    return res.status(status.OK).json({
      ...post.toJSON(),
      favorite
    });
  } catch (e) {
    return res.status(status.BAD_REQUEST).json(e);
  }
}

export async function getPostsList(req, res) {
  const limit = parseInt(req.query.limit, 0);
  const skip = parseInt(req.query.skip, 0);
  try {
    const promise = await Promise.all([
      Admin.findById(req.user._id),
      list({ limit, skip })
    ]);

    const posts = promise[1].reduce((arr, post) => {
      const favorite = promise[0]._favorites.isPostIsFavorite(post._id);

      arr.push({
        ...post.toJSON(),
        favorite
      });

      return arr;
    }, []);

    return res.status(status.OK).json(posts);
  } catch (e) {
    return res.status(status.BAD_REQUEST).json(e);
  }
}

export async function updatePost(req, res) {
  try {
    const post = await findById(req.params.id);
    if (!post.user.equals(req.user._id)) {
      return res.sendStatus(status.UNAUTHORIZED);
    }

    Object.keys(req.body).forEach(key => {
      post[key] = req.body[key];
    });

    return res.status(status.OK).json(await post.save());
  } catch (e) {
    return res.status(status.BAD_REQUEST).json(e);
  }
}

export async function deletePost(req, res) {
  try {
    const post = await findById(req.params.id);

    if (!post.user.equals(req.user._id)) {
      return res.sendStatus(status.UNAUTHORIZED);
    }

    await post.remove();
    return res.sendStatus(status.OK);
  } catch (e) {
    return res.status(status.BAD_REQUEST).json(e);
  }
}

export async function favoritePost(req, res) {
  try {
    const user = await Admin.findById(req.user._id);
    await user._favorites.posts(req.params.id);
    return res.sendStatus(status.OK);
  } catch (e) {
    return res.status(status.BAD_REQUEST).json(e);
  }
}
