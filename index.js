'use strict';

const blessed = require('blessed');
const engine = require('./engine');

const screen = blessed.screen({
    smartCSR: true
});
screen.title = 'Adventure Game';

let game = engine();
game.on('state-change', (prev, curr) => {
    screen.render();
});

// title screen
let intro = require('./screens/intro');
intro.on('update', () => {
    screen.render();
});
screen.append(intro);

// handle global exit commands
screen.key(['escape', 'q', 'C-c'], (ch, key) => {
    return process.exit(0);
});

// initial render
intro.focus();
screen.render();
