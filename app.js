// 引入path模块
const path = require("path");
// 引入express模块
const express = require("express");

const app = express();

app.locals.getFirstMenu = function(data) {
	return data.filter(function(item) {
		return item.parentId === 0;
	});
};

app.locals.getSecondMenu = function(data, id) {
	return data.filter(function(item) {
		return item.parentId === id;
	});
};

// 设置存放模板文件的目录
app.set("views", path.join(__dirname, "views"));
// 设置模板引擎为 ejs
app.set("view engine", "ejs");

// 挂载根路由控制器
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");

app.use(express.static(__dirname + "/public"));
app.use("/", indexRouter);
app.use("/users", userRouter);

app.listen(3000);
