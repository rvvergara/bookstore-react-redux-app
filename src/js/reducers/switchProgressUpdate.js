import { SWITCH_PROGRESS_UPDATE } from '../actions/actionTypes';

const defaultState = {
  on: false,
  id: '',
};

export default (state = defaultState, action) => {
  if (action.type === SWITCH_PROGRESS_UPDATE) {
    return state.on ? { on: false, id: '' } : { on: true, id: action.id };
  }
  return state;
};
