const {tokenize, parse} = require('remark-codeset-core');

module.exports = (options) => {
    const parser = options.parser;

    return (tree, file) => {
        tokenize({tree, parser});
        parse(tree);
    };
};
