const express = require("express");
const router = express.Router();

const updatesCtrl = require("../controllers/updates");

router.post("/posts/:id/updates", updatesCtrl.create);

router.put("/updates/:id", updatesCtrl.update);

// Route to handle delete request for an article
router.delete("/addedarticles/:articleId", updatesCtrl.deleteArticle);

module.exports = router;
