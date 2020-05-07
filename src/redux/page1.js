const myData = {
  num: 1,
};
export default (state = myData, action) => {
  switch (action.type) {
    case "NUMADD":
      return {
        ...state,
        num: ++state.num,
      };
    default:
      return state;
  }
};
