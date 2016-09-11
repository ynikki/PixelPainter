export default {
  setColor,
  clearCanvas
}

export function setColor (x,y,color) {
  return {
    type: "SET_COLOR",
    data: {
      x: x,
      y: y,
      color: color
    }
  };
}

export function clearCanvas () {
  return {
    type: "CLEAR_CANVAS"
  };
}