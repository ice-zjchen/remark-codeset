# gatsby-remark-codeset
Adds syntax to parse sets of code blocks in markdown. Transforms them to tablist.

## Install
`npm install --save gatsby-transformer-remark gatsby-remark-codeset`

## How to use
```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-codeset`,
        // attention: if you use primjs, put codeset before it.
        // `gatsby-remark-prismjs`
      ],
    },
  },
]
```
