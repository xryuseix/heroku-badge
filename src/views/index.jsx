/** @format */

const React = require("react");

const indexPage = () => {
  return (
    <div>
      <h2>Welcome to Heroku badges! (unofficial)</h2>
      <p>
        This program checks the working status of
        <a href="https://heroku.com/home">Heroku</a> and generates the URL of
        <a href="https://shields.io/">shieils.io</a>.
      </p>
      <h2>Usage</h2>
      <p>
        Write it in markdown like this →
        <code style={{ backgroundColor: "gainsboro" }}>
          ![something](https://heroku-booting-badge.herokuapp.com/badge?app=
          {"{"}YOUR HEROKU APP NAME{"}"})
        </code>
      </p>
      <table>
        <thead>
          <tr>
            <th style={{textAlign: "left"}}>Example URL</th>
            <th style={{textAlign: "center"}}>Badge</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{textAlign: "left"}}>
              <a href="https://heroku-booting-badge.herokuapp.com/badge?app=heroku-booting-badge">
                https://heroku-booting-badge.herokuapp.com/badge?app=heroku-booting-badge
              </a>
            </td>
            <td style={{textAlign: "center"}}>
              <img
                src="https://heroku-booting-badge.herokuapp.com/badge?app=heroku-booting-badge"
                alt="neet-obserber"
              />
            </td>
          </tr>
          <tr>
            <td style={{textAlign: "left"}}>
              <a href="https://heroku-booting-badge.herokuapp.com/badge?app=non-existent-apps">
                https://heroku-booting-badge.herokuapp.com/badge?app=non-existent-apps
              </a>
            </td>
            <td style={{textAlign: "center"}}>
              <img
                src="https://heroku-booting-badge.herokuapp.com/badge?app=non-existent-apps"
                alt="non-existent-apps"
              />
            </td>
          </tr>
          <tr>
            <td style={{textAlign: "left"}}>
              <a href="https://heroku-booting-badge.herokuapp.com/badge">
                https://heroku-booting-badge.herokuapp.com/badge
              </a>
            </td>
            <td style={{textAlign: "center"}}>
              <img
                src="https://heroku-booting-badge.herokuapp.com/badge"
                alt="No param"
              />
            </td>
          </tr>
          <tr>
            <td style={{textAlign: "left"}}>
              <a href="https://heroku-booting-badge.herokuapp.com/badge?app">
                https://heroku-booting-badge.herokuapp.com/badge?app
              </a>
            </td>
            <td style={{textAlign: "center"}}>
              <img
                src="https://heroku-booting-badge.herokuapp.com/badge?app"
                alt="Incorrect param"
              />
            </td>
          </tr>
          <tr>
            <td style={{textAlign: "left"}}>
              <a href="https://heroku-booting-badge.herokuapp.com/badge?app=">
                https://heroku-booting-badge.herokuapp.com/badge?app=
              </a>
            </td>
            <td style={{textAlign: "center"}}>
              <img
                src="https://heroku-booting-badge.herokuapp.com/badge?app="
                alt="Incorrect param"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default indexPage;
