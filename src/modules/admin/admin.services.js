const Model = require("./admin.model").default;
const getIp = require("ipware")().get_ip;

const name = "admin";

exports.save = async data => {
  try {
    const model = new Model(data);
    return await model.save();
  } catch (e) {
    throw Error(e);
  }
};

exports.fetch = async (query, page, limit) => {
  try {
    return await Model.paginate(query, { page, limit, sort: { _id: "asc" } });
  } catch (e) {
    throw Error(`Error while paginating ${name}s`);
  }
};

exports.fetchOne = async query => {
  try {
    return await Model.findOne(query);
  } catch (e) {
    throw Error(`Error fetching ${name}`);
  }
};

exports.update = async (query, payload) => {
  try {
    return await Model.updateOne(query, { $set: payload });
  } catch (e) {
    throw Error(`Error editing ${name}`);
  }
};

exports.delete = async query => {
  try {
    return await Model.deleteOne(query);
  } catch (e) {
    throw Error(`Error deleting ${name}`);
  }
};

exports.getIP = req => {
  const ipInfo = getIp(req);
  return ipInfo.clientIp;
};
