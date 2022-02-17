export const setGridSystem = (grid) => {
  return {
    type: "GRID_SYSTEM",
    payload: grid,
  };
};

export const setFeatureResponse = (response) => {
  return {
    type: "SET_RESPONSE",
    payload: response,
  };
};
