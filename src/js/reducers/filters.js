export default (state='', action) => {
  if(action.type === 'CHANGE_FILTER'){
    return action.filterText;
  }
  return state;
}