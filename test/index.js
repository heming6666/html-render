const express = require('express');

const app = express()

// for any other requests, send `index.html` as a response
app.use('*', (req, res) => {

  const generateReport = require('../hypertrons-components/auto-update-report/index.lua');
  const reportHTML = generateReport();
  // set header and status
  res.contentType('text/html');
  res.status(200);
  return res.send(reportHTML);
});

app.listen(3001, () => console.log('Exampleapp listening on port 3001!'))