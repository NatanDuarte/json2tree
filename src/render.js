const width = 800;
const height = 720;

function renderTree(graph, outputFile) {
    const outputPath = path.resolve(outputFile);
    graph.output('png', outputPath, 'dot', `png ${width},${height}`);
    console.log(`A árvore foi salva como "${outputPath}"`);
}

module.exports = { renderTree };