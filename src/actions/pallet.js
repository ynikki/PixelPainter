export default {
  selectColor
}

export function selectColor (color) {
  return {
    type: "SELECT_COLOR",
    data: {
      color: color
    }
  };
}