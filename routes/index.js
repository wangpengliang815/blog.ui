const express = require("express");
const router = express.Router();
var menu;
//访问本地json
var fs = require('fs');
fs.readFile('./json/menu.json', function(err, data) {
	if (err) {
		return console.error(err);
	}
	menu = JSON.parse(data.toString());
})

router.get("/", function(req, res) {
	// res.render("index", menu);
	res.render('index.html',menu);
});
module.exports = router;
