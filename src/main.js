const path = require('path');
const { digraph } = require('graphviz');
const tree = require('./treeBuilder');
const cli = require('./input');

const width = 800; // Largura em pixels
const height = 720; // Altura em pixels


function main() {
    try {
        const { input, output } = cli.parseCommandLineArgs();

        const jsonData = cli.readJSONFile(input);

        const graph = digraph('Tree', {
            rankdir: 'TB',
            nodesep: 8,
        });

        tree.createTree(graph, null, jsonData);

        const outputPath = path.resolve(output || 'tree.png');
        graph.output('png', outputPath, 'dot', `png ${width},${height}`);
        console.log(`A árvore foi salva como "${outputPath}"`);
    } catch (error) {
        console.error(error);
    }
}

module.exports = main;
