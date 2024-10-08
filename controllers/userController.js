const User = require("../collections/user");
const Imag = require("../collections/image");
const AppError = require("../utils/appError");
var cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET, // Click 'View API Keys' above to copy your API secret
});
exports.updateProject = async (req, res, next) => {
  try {
    //console.log(req.params.id);
    const data = await User.findOneAndUpdate(
      { username: req.params.id },
      req.body,
      { new: false }
    );
    //console.log(data.projects);
    const l1 = req.body.projects;
    for (let ob of data.projects) {
      if (!ob.image) continue;
      let f = 1;
      for (let i of l1) {
        if (ob.image && i.image && ob.image._id == i.image) {
          f = 0;
          break;
        }
      }
      if (f) {
        await cloudinary.uploader.destroy(
          ob.image.public_id,
          function (result) {
            // console.log(result);
          }
        );
        await Imag.findByIdAndDelete(ob.image._id);
      }
    }
    return res.status(200).json({ status: "success", data });
  } catch (err) {
    next(err);
  }
};
exports.uploadProjectimage = async (req, res, next) => {
  try {
    const data = await Imag.create(req.body);
    return res.status(200).json({ status: "success", data });
  } catch (err) {
    next(err);
  }
};
exports.updateProjectImage = async (req, res, next) => {
  try {
    const data = await Imag.findByIdAndUpdate(req.body.id, req.body);
    await cloudinary.uploader.destroy(data.public_id, function (result) {
      // console.log(result);
    });
    return res.status(200).json({ status: "success", data });
  } catch (err) {
    next(err);
  }
};
exports.updateUserimage = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.name });
    // console.log(user);
    if (user.public_id) {
      await cloudinary.uploader.destroy(user.public_id, function (result) {
        // console.log(result);
      });
    }
    //console.log(user._id);
    const data = await User.findByIdAndUpdate(
      user._id,
      { picture: req.body.picture, public_id: req.body.public_id },
      {
        new: true,
      }
    );

    return res.status(200).json({ status: "success", data });
  } catch (err) {
    next(err);
  }
};
exports.getUserbyUserName = async (req, res, next) => {
  try {
    const data = await User.findOne({ username: req.params.id });
    if (data) return res.status(200).json({ status: "userExists", data });
    return res.status(404).json({ status: "user not found" });
  } catch (err) {
    next(err);
  }
};
exports.getUserImage = async (req, res, next) => {
  try {
    const data = await User.findOne({ username: req.params.id }).select(
      "picture"
    );

    if (data) return res.status(200).json({ status: "success", data });
  } catch (err) {
    next(err);
  }
};
exports.getUserProjects = async (req, res, next) => {
  try {
    const data = await User.findOne({ username: req.params.id }).select(
      "projects"
    );

    if (data) return res.status(200).json({ status: "success", data });
  } catch (err) {
    next(err);
  }
};
exports.getUserWork = async (req, res, next) => {
  try {
    const data = await User.findOne({ username: req.params.id }).select(
      "github projects"
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
      "skills github linkedin name username email description job picture public_id"
    );
    if (data) return res.status(200).json({ status: "success", data });
  } catch (err) {
    next(err);
  }
};
exports.getUserEducation = async (req, res, next) => {
  try {
    const data = await User.findOne({ username: req.params.id }).select(
      "education"
    );
    if (data) return res.status(200).json({ status: "success", data });
  } catch (err) {
    next(err);
  }
};
exports.getUserExperience = async (req, res, next) => {
  try {
    console.log(req.params.username);
    const data = await User.findOne({ username: req.params.id }).select("work");
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
exports.getUserSkills = async (req, res, next) => {
  try {
    const data = await User.findOne({ username: req.params.id }).select(
      "skills"
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
    console.log(req.params.email);
    return res.status(200).json({ status: "user not found" });
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
    const data = await User.findOneAndUpdate(
      { username: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    return res.status(200).json({ status: "success", data });
  } catch (err) {
    next(err);
  }
};
