const fs = require('fs');
module.exports = { similarity: getSimilarity };
function getSimilarity(word) {
    //read word list
    let words = JSON.parse(fs.readFileSync('./words.json').toString());
    //get word id
    let worddata = Object.entries(words).filter(([key, value]) => value === word);
    //check to see if word exists
    if (typeof worddata[0] != 'undefined') {
        words = null; //free memory
        let wordid = worddata[0][0];
        worddata = null; //free memory
        //load similarity map
        let similaritymap = JSON.parse(fs.readFileSync('./library/map.json').toString());
        let similaritybulkfilename = similaritymap[wordid];
        //similarity exists
        if (typeof similaritybulkfilename != 'undefined') {
            similaritymap = null; //free memory
            // get similarity section file
            let similaritymapsection = JSON.parse(fs.readFileSync('./library/' + similaritybulkfilename).toString());
            // check if word is in this section
            if (typeof similaritymapsection[wordid] != 'undefined')
                //return similar words
                return similaritymapsection[wordid];
            else
                return undefined;
        } else {
            return undefined;
        }
    } else {
        return undefined;
    }
};