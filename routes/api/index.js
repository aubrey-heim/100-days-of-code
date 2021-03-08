const router = require("express").Router();
const recapRoutes = require("./recaps");

// routes for daily recaps
router.use("/recaps", recapRoutes);

module.exports = router;
