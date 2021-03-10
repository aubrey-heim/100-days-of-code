const router = require("express").Router();
const recapsController = require("../../controllers/recapsController");

// Matches with "/api/recaps"
router.route("/").get(recapsController.findAll).post(recapsController.create);
// Matches with "/api/recaps/:id"
router
  .route("/:id")
  .get(recapsController.findById)
  .put(recapsController.update)
  .delete(recapsController.remove);

module.exports = router;
