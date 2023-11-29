const fs = require('fs-extra');
fs.copy('docs/browser/', 'docs', (err) => { if(err) { return console.error(err); } });
