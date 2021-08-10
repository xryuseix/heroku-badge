/** @format */

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const React = require("react");

const Apps = [
  {
    url: "https://heroku-booting-badge.herokuapp.com/badge?app=heroku-booting-badge",
    alt: "heroku-booting-badge",
  },
  {
    url: "https://heroku-booting-badge.herokuapp.com/badge?app=non_existent_apps",
    alt: "non-existent-apps",
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
      <head>
        <link rel="stylesheet" href="./index.css" />
      </head>
      <h2>Welcome to Heroku badges! (unofficial)</h2>
      <p>
        This program checks the working status of{' '}
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
      <table border="1" cellSpacing="0">
        <thead>
          <tr>
            <th className="index_url">Example URL</th>
            <th className="index_badge">Badge</th>
          </tr>
        </thead>
        <tbody>
          {Apps.map((data) => (
            <tr>
              <td className="index_url">
                <a href={data.url}>{data.url}</a>
              </td>
              <td className="index_badge">
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
