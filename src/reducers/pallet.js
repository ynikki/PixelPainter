const initialState ={
  colors: 
  [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "grey",
    "brown",
    "teal",
    "turquoise",
    "magenta",
    "salmon"
  ]
}
const reducer = (state=initialState, action) => {
  let newState = {};
  switch(action.type){
    case "SELECT_COLOR":
      for (let colors in state) {
        newState[colors] = action.data;
      }
      return newState;
    default:
      return state;
  }
}

module.exports = reducer;