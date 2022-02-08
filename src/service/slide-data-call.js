import axios from "axios";

const url = "https://api.npoint.io/98f4cb458397802cfa42";

export const getDataFeatures = () => {
  const response = axios.get(url).then((res) => {
    return res.data.features;
  });

  return response;
};
