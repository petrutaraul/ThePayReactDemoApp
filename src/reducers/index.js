import { combineReducers } from "redux";
import gridSystem from "./gridSystem";
import featureResponse from "./featuresResponse";

const allReducers = combineReducers({
  gridSystem: gridSystem,
  featureResponse: featureResponse,
});

export default allReducers;
