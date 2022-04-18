import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setFeatureResponse, setCountryCode } from "./actions";
import "./App.css";
import "./app.scss";
import CountryHeader from "./components/header/country-header/country-header";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import SecondSlide from "./components/second-slide/second-slide";
import { IFeature } from "./interfaces/IFeature";
import { ILocalizeData } from "./interfaces/ILocalizeData";
import getUserLocale from "./service/getUserLocale";
import DataFeatures from "./service/slide-data-call";

function App() {
  const dispatch = useDispatch();
  const [countryDataCode, setCountryDataCode] = useState("");

  useEffect(() => {
    DataFeatures.getDataFeatures((features: IFeature[]) => {
      if (features.length) {
        dispatch(setFeatureResponse(features));
      }
    });

    getUserLocale((localizeData: ILocalizeData) => {
      const code = localizeData.countryCode.toLowerCase();
      dispatch(
        setCountryCode({
          name: localizeData.country,
          code: localizeData.countryCode,
        })
      );
      setCountryDataCode(localizeData.countryCode.toLowerCase());
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { i18n } = useTranslation();

  return (
    <div className="App">
      {countryDataCode ? (
        <>
          {i18n.language !== countryDataCode && (
            <CountryHeader countryCode={countryDataCode} />
          )}
          <Navbar />
          <Header />
          <SecondSlide />
        </>
      ) : (
        <>...loading</>
      )}
    </div>
  );
}

export default App;
