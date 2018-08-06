const fs = require('fs')

/**
 * Read in a file
 */
function readDataAttributeDocFile(path, callback) {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) return callback(err, data)  // Returning while calling the callback ensures multiple callbacks are not unintentionally invoked.
        return callback(null, data)
    })
}

/**
 * Write JSON object to .json file
 */
function writeJSONFile(jsonObj) {
    fs.writeFile('output/selectors.json', jsonObj, 'utf8', (err) => {
        if (err) {
            return console.log('Error writing file.')
        }
        return console.log('Completed writing file.')
    })
}

// Execution
if (process.argv[2]) {
    readDataAttributeDocFile(process.argv[2], (err, data) => {
        if (err) {
            return console.log('Reading file unsuccessful. ' + err)
        }
    
        // Extract strings used for data attribute property names
        let propNames = data.match(/data-test=[\S]+/gm)
        
        // Format values and create a JSON object
        let jsonData = {}
        propNames.forEach(element => {
            // Remove " and data-test= from string to be used as JSON property name
            let prop = element.replace(/"/g, '').replace('data-test=', '')
            // Format as selector syntax *[data-test=<value>]
            let elementSelector = '*[' + element.replace(/"/g, '') + ']'
            jsonData[prop] = elementSelector
        });
    
        // Write JSON object to file
        writeJSONFile(JSON.stringify(jsonData))
    })
} else {
    console.log('Error: Must provide a file that lists data-test attributes and values.')
}
