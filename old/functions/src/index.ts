/** @format */

import * as functions from "firebase-functions";
import * as express from "express";

const app = express();
app.use(express.static("public"));

app.get("/badge", async (req, res) => {
  const fetch = require("node-fetch");
  const appName = req.query.app as string | undefined;
  if (typeof appName !== "undefined") {
    try {
      const response = await fetch(`https://${appName}.herokuapp.com`);
      const activeFlag: boolean = response.ok;
      const status: string = activeFlag ? "Activate" : "Inactivate";
      const badgeColor: string = activeFlag ? "624888" : "D35C46";
      res.redirect(
        `https://img.shields.io/badge/${appName.replace(
          /-/g,
          "_"
        )}-${status}-${badgeColor}?logo=heroku`
      );
    } catch (err) {
      // http://localhost:5000/badge?app
      // http://localhost:5000/badge?app=
      res.redirect(
        `https://img.shields.io/badge/404-param_is_undefined-D35C46?logo=heroku`
      );
    }
  } else {
    // http://localhost:5000/badge
    res.redirect(
      `https://img.shields.io/badge/404-param_is_undefined-D35C46?logo=heroku`
    );
  }
});

exports.app = functions.https.onRequest(app);
