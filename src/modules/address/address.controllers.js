import status from "http-status";
import Address from "./address.model";

export async function createAddress(req, res) {
  try {
    return res
      .status(status.CREATED)
      .json(await Address.createAddress(req.body, req.user));
  } catch (e) {
    return res.status(status.BAD_REQUEST).json(e);
  }
}

export async function getAddressById(req, res) {
  try {
    return res
      .status(status.OK)
      .json(await Address.findById(req.params.id).populate("user"));
  } catch (e) {
    return res.status(status.BAD_REQUEST).json(e);
  }
}

export async function getUserAddresses(req, res) {
  const limit = req.query.limit ? parseInt(req.query.limit, 0) : 5;
  const page = req.query.page ? parseInt(req.query.page, 0) : 1;
  try {
    return res
      .status(status.OK)
      .json(
        await Address.paginate(
          { user: req.params.id },
          { page, limit, populate: "user" }
        )
      );
  } catch (e) {
    return res.status(status.BAD_REQUEST).json(e);
  }
}

export async function updateAddress(req, res) {
  try {
    const address = await Address.findById(req.params.id);
    if (!address.user.equals(req.user._id)) {
      return res.sendStatus(status.UNAUTHORIZED);
    }

    Object.keys(req.body).forEach(key => {
      address[key] = req.body[key];
    });

    return res.status(status.OK).json(await address.save());
  } catch (e) {
    return res.status(status.BAD_REQUEST).json(e);
  }
}

export async function deleteAddress(req, res) {
  try {
    const address = await Address.findById(req.params.id);

    if (!address.user.equals(req.user._id)) {
      return res.sendStatus(status.UNAUTHORIZED);
    }

    await address.remove();
    return res.sendStatus(status.OK);
  } catch (e) {
    return res.status(status.BAD_REQUEST).json(e);
  }
}
