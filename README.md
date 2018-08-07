# Simple Input/Output File Parser Program
A very straightforward utility that reads a file, parses specific property/value data, and writes the result as JSON. Please note that there is much room for extension and as it exists now, was a very quick way to provide a tool for the scenario described below.

### The Purpose:
Our automated test framework uses custom data attributes to interact with elements on a web page, as opposed to ids, classNames, etc. which may change overtime and may be unique for specific projects. The benefit of this is consistency and reusability across multiple projects.

### The Task:
Be able to have a shared place for developers and QA to view the attribute values for there corresponding elements and generate the data file read by our automated test framework with the values. This would allow us to maintain one central point of truth, generate the assets our test code needs, and keep our test code DRY.

### The Solution:
This project is a simple utility that takes as input a file and looks for the pattern `data-test=<attribute value>`. The key/value pairs are then translated to JSON property/value pairs and written to a .json file.

#### Usage
Our reference document is a README.md file. To generate a .json file from a README.md, located in this projects root, run:
```
npm run source:readmemd
```
Alternatively, to specify a different source file, run the nodejs index.js file passing in the file path:
```
node index.js <path to file>
```
