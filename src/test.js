const fs = require('fs');

let files = []
fs.readdir('./out/_next/static/chunks', (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    files = files;
    console.log(files);
});

const outputFilename = 'merged.js';

let output = '';

for (const file of files) {
    if (!file.includes('.js')) {
        continue
    }
    output += fs.readFileSync(file, 'utf8');
}

fs.writeFileSync(outputFilename, output);