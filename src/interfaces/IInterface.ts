import { compose } from "redux";

export interface IFeature {
  title: string;
  image: string;
}

declare global {
  export interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
