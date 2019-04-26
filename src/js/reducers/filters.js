export default (state = '', action) => {
  if (action.type === 'CHANGE_FILTER') {
    return action.filterText === 'All' ? '' : action.filterText;
  }
  return state;
};
