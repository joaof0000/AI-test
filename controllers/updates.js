const Article = require("../models/article");


module.exports = {
  create,
  delete: deleteArticle,
  update: updateArticle,
};

async function create(req, res) {
  try {
  
    const newArticle = await Article.create({
        user: req.user,
        photoUrl: req.body.photoUrl,
        caption: req.body.caption,
        content: req.body.content,
    });

    // This will return the user object
    await newArticle.populate('user').execPopulate();
    res.status(201).json({ data: newArticle })
  } catch (err) {
    res.status(400).json({ error: err })
  }
}
// Function to delete an article
async function deleteArticle(req, res) {
  try {
    // Find the article with the given ID and owned by the authenticated user
    const article = await Article.findOneAndDelete({
      user: req.user,
      _id: req.params.articleId,
    });

    // If the article does not exist, return an error
    if (!article) {
      return res.status(404).json({ error: "Article not found" });
    }

    res.json({ data: "Article removed" });
  } catch (err) {
    res.status(400).json({ error: err });
  }
}

// Function to update an article (you can use this later if needed)
async function updateArticle(req, res) {
  try {
    // Find the article with the given ID and owned by the authenticated user
    const article = await Article.findOneAndUpdate(
      { user: req.user, _id: req.params.articleId },
      {
        photoUrl: req.body.photoUrl,
        caption: req.body.caption,
        content: req.body.content,
        // Add more fields here based on your article's data structure
      },
      { new: true, runValidators: true }
    );

    // If the article does not exist, return an error
    if (!article) {
      return res.status(404).json({ error: "Article not found" });
    }

    // Populate the 'user' field to get the updated user details
    await article.populate("user").execPopulate();

    res.json({ data: article });
  } catch (err) {
    res.status(400).json({ error: err });
  }
}

// async function index(req, res) {
//   try {
//     // Looking for all of the locations that the user logged in has pinned
//     const updates = await UpdateModel.find({ user: req.user })
//       .populate('user')
//       .exec()
//     res.status(200).json({ updates: updates })
//   } catch (err) {
//     res.status(400).json({ error: err })
//   }
// }
