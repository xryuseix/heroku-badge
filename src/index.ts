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
        if (activeFlag) {
          res.sendFile(__dirname + "/views/badges/Heroku-Activate.svg");
        } else {
          res.sendFile(__dirname + "/views/badges/Heroku-Inactivate.svg");
        }
      } else {
        // これらのURLの時に起動
        // http://localhost:5000/badge?app=Wrong_app_name#*@$%_:{}
        res.sendFile(__dirname + "/views/badges/ERROR-Wrong_app_name.svg");
      }
    } catch (err) {
      // これらのURLの時に起動
      // http://localhost:5000/badge?app
      // http://localhost:5000/badge?app=
      res.sendFile(__dirname + "/views/badges/ERROR-Something_error.svg");
    }
  } else {
    // これらのURLの時に起動
    // http://localhost:5000/badge
    res.sendFile(__dirname + "/views/badges/ERROR-Param_is_undefined.svg");
  }
});

// 起動時の処理
app.listen(app.get("port"), function () {
  console.log("Node app is running at localhost:" + app.get("port"));
});
