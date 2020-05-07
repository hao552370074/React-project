import { combineReducers } from "redux";

function xxx(state = 0, action) {
  return state;
}
function yyy(state = 0, action) {
  return state;
}
const actions = {
  increase: () => ({type: 'INCREASE'}),
  decrease: () => ({type: 'DECREASE'})
}
const reducer = (state = {count: 0}, action) => {
  switch (action.type){
    case 'INCREASE': return {count: state.count + 1};
    case 'DECREASE': return {count: state.count - 1};
    default: return state;
  }
}

export default combineReducers({
  xxx,
  yyy,
  reducer
});
