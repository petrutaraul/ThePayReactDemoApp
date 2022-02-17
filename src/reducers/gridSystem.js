const gridSystem = (state = 3, action) => {
  switch (action.type) {
    case "GRID_SYSTEM":
      return (state = action.payload);
    default:
      return state;
  }
};

export default gridSystem;
