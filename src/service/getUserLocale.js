import axios from "axios";
import checkStatus from "./checkCallStatus";

const getUserLocale = (cb) => {
  return axios
    .get("https://ipapi.co/json/")
    .then(checkStatus)
    .then((response) => response.data)
    .then(cb);
};

export default getUserLocale;
