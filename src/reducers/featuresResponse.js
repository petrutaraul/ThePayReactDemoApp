const featureResponse = (state = [], action) => {
  switch (action.type) {
    case "SET_RESPONSE":
      return (state = action.payload);
    default:
      return state;
  }
};

export default featureResponse;
