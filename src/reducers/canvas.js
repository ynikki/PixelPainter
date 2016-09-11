const initialState = [
 [
  "red",
  "red",
  "red"
 ],
 [
  "green",
  "green",
  "green"
 ],
 [
  "blue",
  "blue",
  "blue"
 ]
]

const reducer = (state=initialState, action) => {
  let newState = {};
  switch(action.type){
    case "CLEAR_CANVAS":
    return newState;
    case "SET_CANVAS":
      const targetColor = action.data.color;
      if (targetColor < 0 || targetColor >=state.length) {
        return state;
      }
      const otherColor = state[targetColor];
      const updatedColor = Object.assign({}, otherColor, { color: action.data.color });
      return [].concat(
        state.slice(0, targetColor),
        updatedColor,
        state.slice(targetColor + 1)
      )
    default:
     return state;
  }
}

module.exports = reducer;