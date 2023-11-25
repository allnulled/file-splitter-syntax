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

## Syntax

The syntax to create a new group, which in the output tree you will find as *file* and not *group* because it is thought to represent multiple files in 1 file, you have to follow the next syntax:

```
<## name of a file.txt ##>
Contents of the file.

<## name of another file.txt ##>
More contents. And so on.
```

No complexity, you will receive the file splitted by objects each of them containing 2 fields:

 - `file`, which is the content of the tag that you chose.
 - `contents`, which is the text of the group itself.

With this output, you can play freely.

## Tests

To run the tests, just do:

```sh
npm test
```