const User = require("../collections/user");
const AppError = require("../utils/appError");
exports.getUser = async (req, res, next) => {
  try {
    const data = await User.find({ username: req.params.id });
    return res.status(200).json({ status: "success", data });
  } catch (err) {
    next(err);
  }
};
exports.createUser = async (req, res, next) => {
  try {
    const data = await User.create(req.body);
    return res.status(200).json({ status: "success", data });
  } catch (err) {
    next(err);
  }
};
exports.deleteUser = async (req, res, next) => {
  try {
    const data = await User.findByIdAndDelete(req.params.id);
    return res.status(202).json({ status: "success", data });
  } catch (err) {
    next(err);
  }
};
exports.updateUser = async (req, res, next) => {
  try {
    const data = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json({ status: "success", data });
  } catch (err) {
    next(err);
  }
};
