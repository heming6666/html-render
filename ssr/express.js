const express = require('express');
const fs = require('fs');
const React = require('react');
const { renderToString } = require('react-dom/server');
const { Home } = require('./component/Home');

const app = express()

// for any other requests, send `index.html` as a response
app.use('*', (req, res) => {

  // read `index.html` file
  let reportHTML = fs.readFileSync('./template.html', {
    encoding: 'utf8',
  });

  // get HTML string from the `App` component
  let appHTML = renderToString(<Home />);

  // populate `#app` element with `appHTML`
  reportHTML = reportHTML.replace('<div id="app"></div>', `<div id="app">${appHTML}</div>`);

  // set header and status
  res.contentType('text/html');
  res.status(200);
  return res.send(reportHTML);
});

app.listen(3001, () => console.log('Exampleapp listening on port 3001!'))