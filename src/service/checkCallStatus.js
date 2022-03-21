const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error("HTTP Error");
    console.log(error);
    throw error;
  }
};

export default checkStatus;
