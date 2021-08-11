/** @format */

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const React = require("react");

const Apps = [
  {
    url: "https://heroku-booting-badge.herokuapp.com/badge?app=heroku-booting-badge",
    alt: "heroku-booting-badge",
  },
  {
    url: "https://heroku-booting-badge.herokuapp.com/badge?app=0-non-existent-apps",
    alt: "non-existent-apps",
  },
  {
    url: "https://heroku-booting-badge.herokuapp.com/badge?app=Wrong_app_name#*@$%_:{}",
    alt: "Wrong_app_name",
  },
  {
    url: "https://heroku-booting-badge.herokuapp.com/badge",
    alt: "No param",
  },
  {
    url: "https://heroku-booting-badge.herokuapp.com/badge?app",
    alt: "Incorrect param",
  },
  {
    url: "https://heroku-booting-badge.herokuapp.com/badge?app=",
    alt: "Incorrect param",
  },
];

const indexPage = () => {
  return (
    <div>
      <h2>Welcome to Heroku badges! (unofficial)</h2>
      <p>
        This program checks the working status of{" "}
        <a
          href="https://heroku.com/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          Heroku
        </a>
        .
      </p>
      <h2>Usage</h2>
      <p>
        Write it in Markdown, HTML, ... like this.
        <SyntaxHighlighter language="markdown">
          {
            "![something](https://heroku-booting-badge.herokuapp.com/badge?app={YOUR HEROKU APP NAME})"
          }
        </SyntaxHighlighter>
        <SyntaxHighlighter language="html">
          {
            '<a href="https://heroku-booting-badge.herokuapp.com/badge?app={YOUR HEROKU APP NAME}" />'
          }
        </SyntaxHighlighter>
      </p>
      <table style={{ borderSpacing: "0" } as React.CSSProperties}>
        <thead>
          <tr>
            <th style={{ textAlign: "center" } as React.CSSProperties}>
              Example URL
            </th>
            <th style={{ textAlign: "center" } as React.CSSProperties}>
              Badge
            </th>
          </tr>
        </thead>
        <tbody>
          {Apps.map((data) => (
            <tr style={{ textAlign: "left" } as React.CSSProperties}>
              <td style={{ border: "1px solid black" } as React.CSSProperties}>
                <a href={data.url}>{data.url}</a>
              </td>
              <td style={{ border: "1px solid black" } as React.CSSProperties}>
                <img src={data.url} alt={data.alt} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default indexPage;
