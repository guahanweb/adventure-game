'use strict';

const EventEmitter = require('events');
const util = require('util');

const STATES = {
    TITLE: 'Title',
    INTRO: 'Intro'
};

function Engine() {
    EventEmitter.call(this);
    this.state = null;
    setState.call(this, STATES.TITLE);
}

Engine.prototype.start = function () {
    setState.call(this, STATES.INTRO);
};

// Private variables
function setState(state) {
    let prev = this.state;
    this.state = state;
    this.emit('state-change', prev, state);
}

util.inherits(Engine, EventEmitter);

let instance = null;
module.exports = function () {
    if (null === instance) {
        instance = new Engine();
    }
    return instance;
};
