import { combineReducers } from "redux";

import goods from './goods.js'
import state from './auth.js'

export default combineReducers({goods, state})