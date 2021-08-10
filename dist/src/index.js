"use strict";
/** @format */
const express = require("express");
const path = require("path");
const app = express();
app.set("port", process.env.PORT || 5000);
app.use(express.static(path.join(__dirname + "/../", "views")));
app.set("views", path.join(__dirname + "/../", "views"));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.listen(app.get("port"), function () {
    console.log("Node app is running at localhost:" + app.get("port"));
});
// app.get('/', require(path.join(__dirname + "/../", "routes")).index);
app.get('/', (_req, res) => {
    res.render('index.tsx');
});
const activeColor = "624888";
const inActiveColor = "D35C46";
app.get("/badge", async (req, res) => {
    const fetch = require("node-fetch");
    const appName = req.query.app;
    if (typeof appName !== "undefined") {
        try {
            const response = await fetch(`https://${appName}.herokuapp.com`);
            const activeFlag = response.ok;
            const status = activeFlag ? "Activate" : "Inactivate";
            const badgeColor = activeFlag ? activeColor : inActiveColor;
            res.redirect(`https://img.shields.io/badge/Heroku-${status}-${badgeColor}?logo=heroku`);
        }
        catch (err) {
            // http://localhost:5000/badge?app
            // http://localhost:5000/badge?app=
            const status = "404";
            const message = "Something_error!";
            res.redirect(`https://img.shields.io/badge/${status}-${message}-${inActiveColor}?logo=heroku`);
        }
    }
    else {
        // http://localhost:5000/badge
        const status = "404";
        const message = "Param_is_undefined";
        res.redirect(`https://img.shields.io/badge/${status}-${message}-${inActiveColor}?logo=heroku`);
    }
});
//# sourceMappingURL=index.js.map