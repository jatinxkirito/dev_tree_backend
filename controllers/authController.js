const REDIRECT_URI = "http://localhost:5173/auth/google/callback";
const axios = require("axios");
exports.googleAuth = (req, res, next) => {
  const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=profile email`;

  res.redirect("http://localhost:5173/krto/cp");
  //return res.status(200).json({ message: "success" });
};
exports.googleCallback = async (req, res) => {
  try {
    // console.log(req);
    const { code } = req.query;
    //console.log(code);
    // Exchange authorization code for access token
    const { data } = await axios.post("https://oauth2.googleapis.com/token", {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      redirect_uri: REDIRECT_URI,
      code,
      grant_type: "authorization_code",
    });

    //console.log(data);
    const { access_token, id_token } = data;

    // Use access_token or id_token to fetch user profile
    const { data: profile } = await axios.get(
      "https://www.googleapis.com/oauth2/v2/userinfo",
      {
        headers: { Authorization: `Bearer ${access_token}` },
      }
    );
    console.log(profile);
    // Code to handle user authentication and retrieval using the profile data
    return res.status(200).json({ status: "success", profile });
    //res.redirect("http://localhost:5173/krto/cp");
  } catch (error) {
    //  console.error("Error:", error);
    // next(err);
    return res.status(404).json({ message: "error", error });
  }
};
