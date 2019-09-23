# remark-codeset
Adds syntax to parse sets of code blocks in markdown. Transforms them to tablist.

## Install
`npm install --save remark-codeset`

## How to use
```javascript
import unified from 'unified';
import markdown from 'remark-parse';
import codeset from 'remark-codeset';
import remark2rehype from 'remark-rehype';
import html from 'rehype-stringify';

const processor = unified()
    .use(markdown)
    .use(codeset)
    .use(remark2rehype)
    .use(html);

const conent = `...`;

processor.process(content, (err, file) => {
    if (err) throw err;
    console.log(String(file));
});
    
```
