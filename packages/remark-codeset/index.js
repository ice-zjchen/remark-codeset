const {tokenize, parse} = require('remark-codeset-core');
const markdown = require('remark-parse');

module.exports = (options) => {
    const parser = options.parser || markdown;

    return (tree, file) => {
        tokenize({tree, parser});
        parse(tree);
    };
};
