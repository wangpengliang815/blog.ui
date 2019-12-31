const express = require("express");
const router = express.Router();
const request = require("request");

var vm = {
  menu: null,
  importance: null
};

request("http://localhost:5000/api/Category", function (error, response, menuData) {
  if (!error && response.statusCode == 200) {
    vm.menu = JSON.parse(menuData);
    request("http://localhost:5000/api/Article/1/21", function (error, response, importanceData) {
      if (!error && response.statusCode == 200) {
        vm.importance = JSON.parse(importanceData);
        router.get("/", function (req, res) {
          res.render("index.html", vm);
        });
      }
    });
  }
});
module.exports = router;
