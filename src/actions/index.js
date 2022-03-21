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

export const setCountryCode = (country) => {
  return {
    type: "SWITCH_COUNTRY_CODE",
    payload: country,
  };
};
