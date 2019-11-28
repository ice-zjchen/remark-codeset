const fs = require('fs');
const path = require('path');
const unified = require('unified');
const markdown = require('remark-parse');
const codeset = require('remark-codeset');
const remark2rehype = require('remark-rehype');
const html = require('rehype-stringify');

const content = fs.readFileSync(path.join(__dirname, './mock/0-width-character.md')).toString();

const processor = unified()
    .use(markdown)
    .use(codeset)
    .use(remark2rehype)
    .use(html);

processor.process(content, (err, file) => {
    if (err) throw err;
    fs.writeFileSync(path.join(__dirname, './output.html'), String(file));
    console.log('process successfully!');
});
