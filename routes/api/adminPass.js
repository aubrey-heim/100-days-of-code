const axios = require("axios");
const router = require("express").Router();
require("dotenv").config();

router.route("/").get((req, res) => {
    res.json(process.env.ADMIN_PASS);
});

module.exports = router;