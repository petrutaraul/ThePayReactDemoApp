import axios from "axios";
import checkStatus from "./checkCallStatus";

const url = "https://api.npoint.io/98f4cb458397802cfa42";

const getDataFeatures = (cb) => {
  return axios
    .get(url)
    .then(checkStatus)
    .then((res) => res.data.features)
    .then(cb);
};

const DataFeatures = { getDataFeatures };
export default DataFeatures;
