# Simple Input/Output File Parser Program
A very straightforward utility that reads a file, parses specific property/value data, and writes the result as JSON.

### The Purpose:
Our automated test framework uses custom data attributes to interact with elements on a web page. The benefit of this is consistency and reuse across multiple projects.

### The Task:
Be able to have a shared place for developers and QA to view the attribute values for there corresponding elements and generate the data file read by our automated test framework with the values. This would allow us to maintain one central point of truth while keeping our test code DRY.

### The Solution:
This project is a simple utility that takes as input a file and looks for all attributes named `data-test` and their corresponding values. The key/value pairs are then written to file in JSON format, which is the format read by the automation test framework.
