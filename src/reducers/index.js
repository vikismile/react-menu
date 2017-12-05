import {combineReducers} from 'redux';
import { menu } from './menu.js';

const allReducers = combineReducers ({
    menu: menu
})

export default allReducers;