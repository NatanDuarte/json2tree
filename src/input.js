const yargs = require('yargs');
const fs = require('fs');


function parseCommandLineArgs() {
    return yargs
        .options({
            'input': {
                alias: 'i',
                describe: 'Arquivo de entrada JSON',
                demandOption: true,
                type: 'string',
            },
            'output': {
                alias: 'o',
                describe: 'Arquivo de saída',
                type: 'string',
            },
        })
        .argv;
}

function readJSONFile(inputFile) {
    try {
        const jsonData = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
        return jsonData;
    } catch (error) {
        console.error('Erro ao ler o arquivo de entrada JSON:', error);
        process.exit(1);
    }
}

module.exports = {
    parseCommandLineArgs,
    readJSONFile,
};
