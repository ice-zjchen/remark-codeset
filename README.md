# remark-codeset

Adds syntax to parse sets of code blocks in markdown. Transforms them to tablist.

Live demo: https://codepen.io/ice-zjchen/full/dybevYP

## Intro

This repository contains the following projects:

- [`remark-codeset`](./packages/remark-codeset) a remark plugin in [unified](https://github.com/unifiedjs/unified) encosystem.
- [`gatsby-remark-codeset`](./packages/gatsby-remark-codeset) a sub-plugin of [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/) in gatsby.
- [`remark-codeset-core`](./packages/remark-codeset-core) core libs including tokenize, parser, etc.


## Syntax
<pre>
~~~codeset
```html
<div>Hello CodeSet</div>
```

```css
div {
  font-size: 32px;
}
```

```js
console.log('I am remark-codeset');
```
~~~
</pre>
