# file-splitter-syntax

Syntax that allows to group parts of a file by labels.

## Installation

```sh
npm i -s file-splitter-syntax
```

## Usage

```js
const FileSplitter = require("file-splitter-syntax");
const ast = FileSplitter.parse("<## Division here ##>\nContinue the contents<## Division there ##>\nMore contents in another group.");
```