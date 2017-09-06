'use strict';

const blessed = require('blessed');

let screen = blessed.box({
    top: 'center',
    left: 'center',
    width: '50%',
    height: '50%',
    shadow: true,
    border: {
        type: 'line'
    },
    style: {
        border: {
            fg: 'cyan'
        }
    }
});

let title = blessed.box({
    parent: screen,
    top: '25%',
    content: 'Welcome to {bold}{white-fg}Adventure Game{/white-fg}{/bold}!',
    align: 'center',
    tags: true
});

let action = blessed.box({
    parent: screen,
    top: '50%',
    content: '(press {green-fg}space{/green-fg} to begin)',
    align: 'center',
    tags: true
});

screen.key('space', (ch, key) => {
    action.setContent('{yellow-fg}starting...{/yellow-fg}');
    screen.emit('update');
});

module.exports = screen;
