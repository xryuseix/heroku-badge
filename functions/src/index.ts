/** @format */

import * as functions from "firebase-functions";
import * as express from "express";

const app = express();
app.use(express.static("public"));

app.get("/badge", (req, res) => {
  //   res.send(req.query);
  const appName = "NEET";
  const status = "Activate";
  const badgeColor = "624888";
  res.redirect(
    `https://img.shields.io/badge/${appName}-${status}-${badgeColor}?logo=heroku`
  );
});

exports.app = functions.https.onRequest(app);
