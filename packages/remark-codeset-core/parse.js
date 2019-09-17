const _ = require('lodash');
const visit = require('unist-util-visit');
const classnames = require('classnames');

const genCodeUid = (prefix, seq, name) => `${prefix}-${seq}-${name}`;

const createPaneNode = codesetId => (code, index) => {
    const className = {
        'tab-pane': true,
        'codeset-pane': true,
        'show': index === 0,
        'active': index === 0,
        [`codeset-pane-${code.lang}`]: true
    };

    return ({
        type: 'element',
        data: {
            hName: 'div',
            hProperties: {
                className: classnames(className),
                id: genCodeUid(codesetId, index, code.lang),
                role: 'tabpanel',
            }
        },
        children: [code]
    });
};

const createPaneListNode = (codeList, codesetId) => ({
    type: 'element',
    data: {
        hName: 'div',
        hProperties: {
            className: ['tab-content'],
            id: `${codesetId}-tab-content`
        }
    },
    children: _.map(codeList, createPaneNode(codesetId))
});

const createTabItemNode = codesetId => (code, index) => {
    const linkClassName = {
        'nav-link': true,
        'active': index === 0
    };
    const linkNode = {
        type: 'element',
        tagName: 'a',
        properties: {
            className: classnames(linkClassName),
            dataToggle: 'tab',
            href: `#${genCodeUid(codesetId, index, code.lang)}`
        },
        children: [{
            type: 'text', value: code.lang
        }]
    };

    return {
        type: 'element',
        tagName: 'li',
        properties: {
            className: ['nav-item', `nav-item-${code.lang}`]
        },
        children: [linkNode]
    };
}

const createTabListNode = (codeList, codesetId) => ({
    type: 'element',
    data: {
        hName: 'ul',
        hProperties: {
            className: ['nav', 'nav-tabs'],
            role: 'tablist',
            id: `${codesetId}-nav-tabs`
        },
        hChildren: _.map(codeList, createTabItemNode(codesetId))
    }
});

const parseCodeSet = markdownAST => {
    let count = 0;

    visit(markdownAST, 'codeset', (node, index, parent) => {

        const codeList = node.children;
        const codesetId = `codeset-${count}`;
        const tabsNode = createTabListNode(codeList, codesetId);
        const panesNode = createPaneListNode(codeList, codesetId);

        node.data = {
            hName: 'div',
            hProperties: {
                className: ['codeset-wrapper'],
                id: codesetId
            },
        };
        node.children = [tabsNode, panesNode];

        count++;
    });
};

module.exports = parseCodeSet;
