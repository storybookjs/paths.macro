# Babel paths.macro

A [babel macro](https://github.com/kentcdodds/babel-plugin-macros) that allows you to "import" the location of the source-file.

The supported paths you can import:

name         | example
------------ | ---
npmRoot      | `/Users/you/project`
gitRoot      | `/Users/you/project`
wd           | `/Users/you/project`
fileAbsolute | `/Users/you/project/src/input.js`
file         | `input.js`
extention    | `.js`
filename     | `input`
baseAbsolute | `/Users/you/project/src/`
base         | `/src/`

The default import is equal to `base`.

## Example

Source file `input.js`:

```js
import base, { filename } from 'babel-plugin-module-paths/paths.macro';

console.log(base, filename);

alert(filename, base);

function usePathsForSomething() {
  return [filename, base];
};
```

Output:

```js
console.log("/src/", "input");

alert("input", "/src/");

function usePathsForSomething() {
  return ["input", "/src/"];
};
```

## Config

Install:

```sh
yarn add paths.macro
```

If you don't have babel-macros already you must also install that:

```sh
yarn add babel-plugin-macros
```

Ensure you have `babel-plugin-macros` in your babel config (`.babelrc`).

```json
{
  "plugins": ["macros"]
}
```
