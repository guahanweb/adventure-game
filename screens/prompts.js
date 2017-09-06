'use strict';

const blessed = require('blessed');

let question = blessed.question({
  border: 'line',
  height: 'shrink',
  width: 'half',
  top: 'center',
  left: 'center',
  label: ' {blue-fg}Question{/blue-fg} ',
  tags: true,
  keys: true,
  vi: true
});

module.exports = {
  question: question
};
