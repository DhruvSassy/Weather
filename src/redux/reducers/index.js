import {combineReducers} from 'redux';

import { weathereducers } from './weathereducers';

const reducers = combineReducers({
    weatherDetail:weathereducers,
});

export default reducers;