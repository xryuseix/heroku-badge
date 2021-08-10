/** @format */

const express = require("express");
const path = require("path");
const expressReactViews = require("express-react-views");

const app = express();
app.set("port", process.env.PORT || 5000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jsx");
app.engine("jsx", expressReactViews.createEngine());

app.get("/", (_req: any, res: any) => {
  res.render("index.jsx");
});

// const activeColor: string = "624888";
// const inActiveColor: string = "D35C46";

// バッジを表示するの処理
app.get("/badge", async (req: any, res: any) => {
  const fetch = require("node-fetch");
  const appName = req.query.app as string | undefined;
  if (typeof appName !== "undefined") {
    try {
      if (/^[a-z\d\-]+$/.test(appName)) {
        const response = await fetch(`https://${appName}.herokuapp.com`);
        const activeFlag: boolean = response.ok;
        // 画像生成コード
        // const status: string = activeFlag ? "Activate" : "Inactivate";
        // const badgeColor: string = activeFlag ? activeColor : inActiveColor;
        // res.redirect(
        //   `https://img.shields.io/badge/Heroku-${status}-${badgeColor}?logo=heroku`
        // );
        if (activeFlag) {
          res.sendFile(__dirname + "/views/badges/Heroku-Activate.svg");
        } else {
          res.sendFile(__dirname + "/views/badges/Heroku-Inactivate.svg");
        }
      }else {
        // 別のBadgeにしてもいいかも
        res.sendFile(__dirname + "/views/badges/Heroku-Inactivate.svg");
      }
    } catch (err) {
      // これらのURLの時に起動
      // http://localhost:5000/badge?app
      // http://localhost:5000/badge?app=

      // 画像生成コード
      // const status: string = "404";
      // const message: string = "Something_error!";
      // res.redirect(
      //   `https://img.shields.io/badge/${status}-${message}-${inActiveColor}?logo=heroku`
      // );
      res.sendFile(__dirname + "/views/badges/404-Something_error.svg");
    }
  } else {
    // これらのURLの時に起動
    // http://localhost:5000/badge

    // 画像生成コード
    // const status: string = "404";
    // const message: string = "Param_is_undefined";
    // res.redirect(
    //   `https://img.shields.io/badge/${status}-${message}-${inActiveColor}?logo=heroku`
    // );
    res.sendFile(__dirname + "/views/badges/404-Param_is_undefined.svg");
  }
});

app.get("/static/active", async (req: any, res: any) => {
  res.sendFile("../views/status.svg");
});

// 起動時の処理
app.listen(app.get("port"), function () {
  console.log("Node app is running at localhost:" + app.get("port"));
});
