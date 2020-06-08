const babel = require('@babel/core');

const options = {
  plugins: [
    require.resolve('babel-plugin-macros'),
  ],
};

test('should transform', () => {
  const inputFile = './src/input.js';

  const result = babel.transformFileSync(inputFile, options);

  expect(result.code).toMatchSnapshot();
});
