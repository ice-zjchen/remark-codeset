const {tokenize, parse} = require('remark-codeset-core');
const remark = require('remark');

module.exports = (options) => {
    const parser = options && options.parser ? options.parser : remark();

    return (markdownAST, file) => {
        tokenize({markdownAST, parser});
        parse(markdownAST);
    };
};
