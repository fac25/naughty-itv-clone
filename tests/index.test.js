const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

beforeEach(() => {
  document.documentElement.innerHTML = html;
  require('../index.js');
});

test('The page has a title', () => {
  let pageTitle = document.querySelector('title');
  expect(pageTitle.textContent).toEqual('Hello world!');
});