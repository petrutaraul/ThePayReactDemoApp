import { combineReducers } from "redux";
import gridSystem from "./gridSystem";
import featureResponse from "./featuresResponse";
import countryCode from "./country";

const allReducers = combineReducers({
  gridSystem,
  featureResponse,
  countryCode,
});

export default allReducers;
