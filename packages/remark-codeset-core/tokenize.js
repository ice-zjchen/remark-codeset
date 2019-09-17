const tokenizeCodeSet = ({markdownAST, parser}) => {
    visit(markdownAST, 'code', (node, index, parent) => {
        if (node.lang === 'codeset') {
            const codeAst = parser.parse(node.value);

            node.type = 'codeset';
            node.data = {
                hName: 'div'
            };
            node.children = codeAst.children;
        }
    });
}

module.exports = tokenizeCodeSet;
