"use strict";
const express = require('express');
const app = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.get('/', function (_request, response) {
    response.send('Hello Worlda!');
});
app.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'));
});
//# sourceMappingURL=index.js.map