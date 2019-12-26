const express = require("express");
const router = express.Router();

var request = require('request');
router.get("/", function(req, res) {
	request('http://localhost:5000/api/Category', function(error, response, data) {
		if (!error && response.statusCode == 200) {
			res.render("index", JSON.parse(data));
		}
	})
});
module.exports = router;
