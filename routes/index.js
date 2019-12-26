const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  res.render("index", {
    success: true,
    message: null,
    data: [
      {
        name: "Dotnet",
        parentId: 0,
        order: 0,
        id: 1,
        isDelete: 0,
        updateTime: "2019-12-22T19:01:39.4460557"
      },
      {
        name: "基础知识",
        parentId: 1,
        order: 0,
        id: 2,
        isDelete: 0,
        updateTime: "2019-12-22T19:03:07.6113961"
      },
      {
        name: "面向对象",
        parentId: 1,
        order: 0,
        id: 3,
        isDelete: 0,
        updateTime: "2019-12-22T19:03:29.1605506"
      },
      {
        name: "IOC&DI",
        parentId: 1,
        order: 0,
        id: 4,
        isDelete: 0,
        updateTime: "2019-12-22T19:03:40.9770809"
      },
      {
        name: "ORM框架",
        parentId: 1,
        order: 0,
        id: 5,
        isDelete: 0,
        updateTime: "2019-12-22T19:03:51.589766"
      },
      {
        name: "多线程",
        parentId: 1,
        order: 0,
        id: 6,
        isDelete: 0,
        updateTime: "2019-12-22T19:04:02.7815096"
      },
      {
        name: "前端开发",
        parentId: 0,
        order: 0,
        id: 7,
        isDelete: 0,
        updateTime: "2019-12-22T19:04:19.1006598"
      },
      {
        name: "Web开发",
        parentId: 0,
        order: 0,
        id: 8,
        isDelete: 0,
        updateTime: "2019-12-22T19:04:25.8000622"
      },
      {
        name: "Other",
        parentId: 0,
        order: 0,
        id: 9,
        isDelete: 0,
        updateTime: "2019-12-22T19:04:33.9395485"
      },
      {
        name: "设计模式",
        parentId: 0,
        order: 0,
        id: 10,
        isDelete: 0,
        updateTime: "2019-12-22T19:04:41.951786"
      },
      {
        name: "如何成为人尽皆知的csharp开发人员",
        parentId: 9,
        order: 0,
        id: 18,
        isDelete: 0,
        updateTime: "2019-12-22T19:07:26.2493534"
      },
      {
        name: "随便的记",
        parentId: 9,
        order: 0,
        id: 19,
        isDelete: 0,
        updateTime: "2019-12-22T19:07:34.1099681"
      }
    ]
  });
});

module.exports = router;
