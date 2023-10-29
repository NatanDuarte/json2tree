const wordWrap = require('word-wrap');


const maxLineLength = 18;

function wrapText(text, maxLineLength) {
    return wordWrap(text, { width: maxLineLength, indent: '' });
}

function createTree(graph, parent, data) {
    if (data.name) {
        const currentNode = graph.addNode(wrapText(data.name, maxLineLength));
        if (data.description) {
            currentNode.set('label', wrapText(data.name, maxLineLength) + '\\n\\n' + wrapText(data.description, maxLineLength));
        }
        if (parent) {
            graph.addEdge(parent, currentNode);
        }
        if (data.children && data.children.length > 0) {
            data.children.forEach(child => createTree(graph, currentNode, child));
        }
    }
}

module.exports = {
    createTree,
};
