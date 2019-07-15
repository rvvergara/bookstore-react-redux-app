import { SWITCH_ADD_BOOK_MODE } from '../actions/actionTypes';

export default (state = false, action) => (action.type === SWITCH_ADD_BOOK_MODE ? !state : state);
