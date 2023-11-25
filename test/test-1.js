const FileSplitterParser = require(__dirname + "/../src/file-splitter-syntax.js");
const fs = require("fs");
const contents = fs.readFileSync(__dirname + "/test-1.txt").toString();
const ast = FileSplitterParser.parse(contents);

if(!Array.isArray(ast)) {
    throw new Error("Error 1");
}
if(ast.length !== 2) {
    throw new Error("Error 2");
}
if(typeof ast[0].file !== "string") {
    throw new Error("Error 3");
}
if(typeof ast[0].contents !== "string") {
    throw new Error("Error 4");
}