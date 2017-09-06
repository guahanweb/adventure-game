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

// quit screen
let prompts = require('./screens/prompts');
screen.append(prompts.question);

// handle global exit commands
screen.key(['escape', 'q', 'C-c'], (ch, key) => {
    prompts.question.ask('Are you sure you wish to quit?', (err, value) => {
        if (!!value) {
            return process.exit(0);
        }

        prompts.question.hide();
        screen.render();
    });
});

// initial render
intro.focus();
screen.render();
