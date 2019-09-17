const {tokenize, parse} = require('remark-codeset-core');

module.exports = ({markdownAST, compiler}, options) => {
    const parser = {
        parse: compiler.parseString
    };

    tokenize({markdownAST, parser});
    parse(markdownAST);
};
