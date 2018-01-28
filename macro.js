const path = require('path');
const fs = require('fs');

const findRoot = require('find-root');
const { createMacro } = require('babel-macros');
const { toUnix } = require('upath');

const getPaths = f => {
  const _osDependentAbsolute = path.resolve(f);
  const _fileAbsolute = toUnix(_osDependentAbsolute);
  const _file = path.basename(_fileAbsolute);
  const _extention = path.extname(_fileAbsolute);
  
  const _filename = _file.replace(_extention, '');
  
  const _npmRoot = toUnix(findRootAttempt(_osDependentAbsolute));
  const _gitRoot = toUnix(findRootAttempt(_osDependentAbsolute, (dir) => fs.existsSync(path.resolve(dir, '.git'))));
  const _wd = toUnix(process.cwd());
  
  const _baseAbsolute = _fileAbsolute.replace(_file, '');
  const _base = _baseAbsolute.replace(_npmRoot, '');

  return {
    npmRoot: _npmRoot,
    gitRoot: _gitRoot,
    wd: _wd,
    fileAbsolute: _fileAbsolute,
    file: _file,
    extention: _extention,
    filename: _filename,
    baseAbsolute: _baseAbsolute,
    base: _base,
    default: _base,
  };
};

const findRootAttempt = (...params) => {
  try {
    return path.resolve(findRoot(...params));
  } catch (error) {
    return '';
  }
};

const macro = ({ references, state }) => {
  const paths = getPaths(state.file.opts.filename);

  Object.keys(paths).forEach(key => {
    const value = (key === 'default' ? paths['base'] : paths[key]) || '';
    const list = references[key] || [];

    list.forEach(reference => {
      reference.replaceWithSourceString(JSON.stringify(value));
    });
  })
};

module.exports = createMacro(macro);
