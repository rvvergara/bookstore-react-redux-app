import { SWITCH_ADD_ITEM_MODE } from '../actions/actionTypes';

export default (state = false, action) => (action.type === SWITCH_ADD_ITEM_MODE ? !state : state);
