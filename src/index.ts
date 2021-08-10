/** @format */

const express = require("express");
const path = require("path");

const app = express();
app.set("port", process.env.PORT || 5000);
app.use(express.static(path.join(__dirname + "/../", "static")));

app.listen(app.get("port"), function () {
  console.log("Node app is running at localhost:" + app.get("port"));
});

app.get("/", function (_req: any, res: any) {
  res.sendFile(path.join(__dirname + "/../", "static/index.html"));
});

const activeColor: string = "624888";
const inActiveColor: string = "D35C46";

app.get("/badge", async (req: any, res: any) => {
  const fetch = require("node-fetch");
  const appName = req.query.app as string | undefined;
  if (typeof appName !== "undefined") {
    try {
      const response = await fetch(`https://${appName}.herokuapp.com`);
      const activeFlag: boolean = response.ok;
      const status: string = activeFlag ? "Activate" : "Inactivate";
      const badgeColor: string = activeFlag ? activeColor : inActiveColor;
      res.redirect(
        `https://img.shields.io/badge/Heroku-${status}-${badgeColor}?logo=heroku`
      );
    } catch (err) {
      // http://localhost:5000/badge?app
      // http://localhost:5000/badge?app=
      const status: string = "404";
      const message: string = "Something_error!";
      res.redirect(
        `https://img.shields.io/badge/${status}-${message}-${inActiveColor}?logo=heroku`
      );
    }
  } else {
    // http://localhost:5000/badge
    const status: string = "404";
    const message: string = "Param_is_undefined";
    res.redirect(
      `https://img.shields.io/badge/${status}-${message}-${inActiveColor}?logo=heroku`
    );
  }
});
