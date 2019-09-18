# remark-codeset

Adds syntax to parse sets of code blocks in markdown. Transforms them to tablist.

Live demo: https://codepen.io/ice-zjchen/full/dybevYP

## Intro

This repository contains the following projects:

- [`remark-codeset`](./packages/remark-codeset) A remark plugin used in the remark processor powered by [@unified](https://github.com/unifiedjs/unified) collective.
- [`gatsby-remark-codeset`](./packages/gatsby-remark-codeset) A sub-plugin of [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/) used in gatsby. More details about [gatsby plugins](https://www.gatsbyjs.org/packages/gatsby-remark-codeset/?=codeset)
- [`remark-codeset-core`](./packages/remark-codeset-core) Core libs including tokenize, parser, etc.


## Syntax
<pre>
~~~codeset
```html
&lt;div&gt;Hello CodeSet&lt;/div&gt;
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
