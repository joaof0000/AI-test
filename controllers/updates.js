// Import our  model in order to talk to the goals collection in mongodb
const PostModel = require("../models/posts");

module.exports = {
  create,
  delete: deleteUpdate,
  update: updateUpdate,
};

async function create(req, res) {
  try {
    //Find the newgoal with update
    const postDoc = await PostModel.findOne({
        user: req.user,
        photoUrl: req.body.photoUrl,
        caption: req.body.caption,
        content: req.body.content,
    });

    // This will return the user object
    await update.populate('user')
    res.status(201).json({ data: update })
  } catch (err) {
    res.status(400).json({ error: err })
  }
}

async function index(req, res) {
  try {
    // Looking for all of the locations that the user logged in has pinned
    const updates = await UpdateModel.find({ user: req.user })
      .populate('user')
      .exec()
    res.status(200).json({ updates: updates })
  } catch (err) {
    res.status(400).json({ error: err })
  }
}

async function deleteUpdate(req, res) {
  try {
    const update = await Update.findOne({
      user: req.user,
      url: req.params.updateUrl
    })
    update.remove(req.params.id)
    await update.save()
    res.json({ data: 'article removed' })
  } catch (err) {
    res.status(400).json({ error: err })
  }
}
