import {combineReducers} from 'redux';
import { menu } from './menu.js';
import { events } from './events.js';

const allReducers = combineReducers ({
    menu: menu,
    events: events
})

export default allReducers;