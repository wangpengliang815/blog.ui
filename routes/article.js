const express = require("express");
const router = express.Router();
const request = require("request");

// request("http://localhost:5000/api/Article/1/21", function(error, response, data) {
// 	if (!error && response.statusCode == 200) {
// 		router.get("/:id", function(req, res) {
// 			res.render("detail.html", JSON.parse(data));
// 		});
// 	}
// });

module.exports = router;
