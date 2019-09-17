/**
* @file index
* @author Ice(chenzhouji@baidu.com)
*/
const parse = require('./parse');
const tokenize = require('./tokenize');

module.exports = ({markdownAST, parser}) => {
    tokenize({markdownAST, parser});
    parse(markdownAST);
};
