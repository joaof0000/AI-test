const User = require("../models/user");
const Post = require("../models/post");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login,
  profile,
};

async function profile(req, res) {
  try {
    const user = await User.findOne({ username: req.params.username });

    if (!user) return res.status(404).json({ error: "User not found" });

    const posts = await Post.find({ user: user._id }).populate("user").exec();
    console.log(posts, " these are the posts");
    res.status(200).json({ posts: posts, user: user });
  } catch (err) {
    console.log(err);
    res.status(400).json({ err });
  }
}

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(401).json({ err: "bad credentials" });

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

function createJWT(user) {
  return jwt.sign({ user }, SECRET, { expiresIn: "24h" });
}

