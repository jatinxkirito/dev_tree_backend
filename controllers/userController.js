const User = require("../collections/user");
const AppError = require("../utils/appError");
exports.getUserbyUserName = async (req, res, next) => {
  try {
    const data = await User.findOne({ username: req.params.id });
    if (data) return res.status(200).json({ status: "userExists", data });
    return res.status(404).json({ status: "user not found" });
  } catch (err) {
    next(err);
  }
};
exports.getUserWork = async (req, res, next) => {
  try {
    const data = await User.findOne({ username: req.params.id }).select(
      "github work"
    );

    if (data) return res.status(200).json({ status: "success", data });
  } catch (err) {
    next(err);
  }
};
exports.getUserCp = async (req, res, next) => {
  try {
    const data = await User.findOne({ username: req.params.id }).select(
      "leetcode codeforces codechef"
    );
    if (data) return res.status(200).json({ status: "success", data });
  } catch (err) {
    next(err);
  }
};
exports.getUserHome = async (req, res, next) => {
  try {
    const data = await User.findOne({ username: req.params.id }).select(
      "skills github linkedin name username email description"
    );
    if (data) return res.status(200).json({ status: "success", data });
  } catch (err) {
    next(err);
  }
};
exports.getUserEducation = async (req, res, next) => {
  try {
    console.log(req.params.username);
    const data = await User.findOne({ username: req.params.id }).select(
      "education"
    );
    if (data) return res.status(200).json({ status: "success", data });
  } catch (err) {
    next(err);
  }
};
exports.getUserAchievments = async (req, res, next) => {
  try {
    const data = await User.findOne({ username: req.params.id }).select(
      "achievments"
    );
    if (data) return res.status(200).json({ status: "success", data });
  } catch (err) {
    next(err);
  }
};

exports.getUserbyEmail = async (req, res, next) => {
  try {
    const data = await User.findOne({ email: req.params.mail });
    if (data) return res.status(200).json({ status: "userExists", data });
    return res.status(404).json({ status: "user not found" });
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
