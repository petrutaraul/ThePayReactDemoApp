const countryCode = (state = { name: "", code: "" }, action) => {
  switch (action.type) {
    case "SWITCH_COUNTRY_CODE":
      return (state = action.payload);
    default:
      return state;
  }
};

export default countryCode;
