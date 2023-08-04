const Post = require("../models/post");

const { v4: uuidv4 } = require("uuid");

const S3 = require("aws-sdk/clients/s3");

const s3 = new S3();

const BUCKET_NAME = process.env.BUCKET_NAME;

module.exports = {
  create,
  index,
};

async function create(req, res) {
  console.log(req.body, " < req.body, req.file in posts/api create");

  try {
    const post = await Post.create({
      caption: req.body.caption,
      user: req.user,
      content: req.body.content,
    });

    await post.populate("user");

    res.status(201).json({ data: post });
  } catch (err) {
    res.status(400).json({ error: err });
  }
}

async function index(req, res) {
  try {
    const posts = await Post.find({}).populate("user").exec();
    res.status(200).json({ posts });
  } catch (err) {}
}
