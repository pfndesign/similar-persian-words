#!/usr/bin/env node

const yargs = require("yargs");
const {
    similarity
} = require('.')
const usage = "\nUsage: persiansimilarwords <word> persian word to get similarty";
const help = "\nUsage: persiansimilarwords <word> persian word to get similarty .\n\nuse --help for more info";
const options = yargs
    .usage(usage)
    .option("r", {
        alias: "raw",
        describe: "return raw data",
        type: "boolean",
        demandOption: false
    })
    .option("w", {
        alias: "words",
        describe: "return words list",
        type: "boolean",
        demandOption: false
    })
    .option("l", {
        alias: "limit",
        describe: "limit words display",
        type: "number",
        demandOption: false
    })
    .option("s", {
        alias: "string",
        describe: "return word string",
        type: "boolean",
        demandOption: false
    })
    .help(true)
    .argv;
if (yargs.argv._[0] == null) {
    console.log(help);
    return;
}
console.log('> similarity for word : "' + yargs.argv._[0] + "\"");
var similarwords = similarity(yargs.argv._[0]);

if (typeof similarwords != 'undefined') {
    var output = similarwords;
    if (yargs.argv.r == true) {
        if (yargs.argv.w == true)
            output = output.words;
        if (yargs.argv.l > 0)
            output = Array.isArray(output) ? output.slice(0, yargs.argv.l) : output.words.slice(0, yargs.argv.l);
        if (yargs.argv.s == true)
            output = Array.isArray(output.words) ? output.words.map((item) => {
                return item.word
            }) : output.map((item) => {
                return item.word
            });
        console.log(output);
        return;
    }
    console.log('> totaL similar words : "' + similarwords.total + "\"");
    console.log('> best match : "' + similarwords.bestMatch.word + "\"");
    console.log('> best match rating : "' + similarwords.bestMatch.rating + "\"");
    console.log('> similar words : ');
    output = output.words.map((item) => {
        return item.word
    });
    if (yargs.argv.l > 0)
        output = Array.isArray(output) ? output.slice(0, yargs.argv.l) : output.words.slice(0, yargs.argv.l);
    console.log(output.join(','));
} else {
    console.log('no similarty found');
}