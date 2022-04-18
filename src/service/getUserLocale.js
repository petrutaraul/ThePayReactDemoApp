import axios from "axios";
import checkStatus from "./checkCallStatus";

const getUserLocale = (cb) => {
  return axios
    .get("http://ip-api.com/json")
    .then(checkStatus)
    .then((response) => response.data)
    .then(cb);
};

export default getUserLocale;
