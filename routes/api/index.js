const router = require("express").Router();
const recapRoutes = require("./recaps");
const adminPassRoutes = require("./adminPass")
// routes for daily recaps
router.use("/recaps", recapRoutes);
// routes for the admin password
router.use("/admin-pass", adminPassRoutes);

module.exports = router;
