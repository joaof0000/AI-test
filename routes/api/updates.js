const express = require("express");
const router = express.Router();

const updatesCtrl = require("../../controllers/updates");

router.post("/posts/:id/updates", updatesCtrl.create);

router.put("/:articleId", updatesCtrl.update);

// Route to handle delete request for an article
router.delete("/:articleId", updatesCtrl.delete);
router.get("/:articleId", function () {
  console.log("test");
});

module.exports = router;
