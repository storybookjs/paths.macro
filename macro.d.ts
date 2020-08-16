/**
 * `/Users/you/project/src/input.js`
 * => `/Users/you/project`
 */
export const npmRoot: () => string;
/**
 * `/Users/you/project/src/input.js`
 * => `/Users/you/project`
 */
export const gitRoot: () => string;
/**
 * `/Users/you/project/src/input.js`
 * => `/Users/you/project`
 */
export const wd: () => string;
/**
 * `/Users/you/project/src/input.js`
 * => `/Users/you/project/src/input.js`
 */
export const fileAbsolute: () => string;
/**
 * `/Users/you/project/src/input.js`
 * => `input.js`
 */
export const file: () => string;
/**
 * `/Users/you/project/src/input.js`
 * => `.js`
 */
export const extension: () => string;
/**
 * `/Users/you/project/src/input.js`
 * => `input`
 */
export const filename: () => string;
/**
 * `/Users/you/project/src/input.js`
 * => `/Users/you/project/src/`
 */
export const baseAbsolute: () => string;
/**
 * `/Users/you/project/src/input.js`
 * => `/src/`
 */
export const base: () => string;

export default base