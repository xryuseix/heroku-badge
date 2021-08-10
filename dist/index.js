"use strict";
/** @format */
const express = require("express");
const path = require("path");
const app = express();
app.set("port", process.env.PORT || 5000);
app.use(express.static(path.join(__dirname + "/../", "static")));
app.listen(app.get("port"), function () {
    console.log("Node app is running at localhost:" + app.get("port"));
});
app.get("/", function (_req, res) {
    res.sendFile(path.join(__dirname + "/../", "static/index.html"));
});
app.get("/badge", async (req, res) => {
    const fetch = require("node-fetch");
    const appName = req.query.app;
    if (typeof appName !== "undefined") {
        try {
            const response = await fetch(`https://${appName}.herokuapp.com`);
            const activeFlag = response.ok;
            const status = activeFlag ? "Activate" : "Inactivate";
            const badgeColor = activeFlag ? "624888" : "D35C46";
            res.redirect(`https://img.shields.io/badge/${appName.replace(/-/g, "_")}-${status}-${badgeColor}?logo=heroku`);
        }
        catch (err) {
            // http://localhost:5000/badge?app
            // http://localhost:5000/badge?app=
            res.redirect(`https://img.shields.io/badge/404-something_error!-D35C46?logo=heroku`);
        }
    }
    else {
        // http://localhost:5000/badge
        res.redirect(`https://img.shields.io/badge/404-param_is_undefined-D35C46?logo=heroku`);
    }
});
//# sourceMappingURL=index.js.map