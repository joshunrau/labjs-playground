import { Component } from 'lab.js/core';

const component = new Component({
  responses: {
    'keypress(s)': 'left',
    'keypress(l)': 'right'
  },
  timeout: 1000
});

await component.run();
