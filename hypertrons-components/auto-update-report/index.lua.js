const fs = require('fs');
const path = require('path');

const generateReport = function () {
  const sqlsDir = '../sqls/';
  var files = fs.readdirSync(sqlsDir);
  if (!files) {
    console.log('No sql component found')
  }
  const sqlRenderParams = {};

  let reportTemplate = fs.readFileSync('../REPORT_TEMPLATE.html', {
    encoding: 'utf8',
  })
  let newReport = reportTemplate;


  for (file of files) {
    const dir = path.resolve(sqlsDir, file);
    // const sqlRaw = require(path.resolve(dir, 'sql'))
    // const requestRes = {
    //   status: 200,
    //   data: {
    //     activity: 100
    //   }
    // }
    const htmlContent = fs.readFileSync(path.resolve(dir, 'index.html'), {
      encoding: 'utf8',
    })
    const jsContent = fs.readFileSync(path.resolve(dir, 'index.js'), {
      encoding: 'utf8',
    })
    const renderText = htmlContent + '<script>' + jsContent + '</script>';
    sqlRenderParams[file] = {
      text: renderText
    }
    newReport = newReport.replace('</body>', `${renderText}</body>`);
  }
  return newReport;
}

module.exports = generateReport;
