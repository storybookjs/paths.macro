import base, { filename } from '../macro';

console.log(base, filename);

alert(filename, base);

function usePathsForSomething() {
  return [filename, base];
};
