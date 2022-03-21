import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../../button/Button";
import "./country-header.scss";
import languages from "../../../languagelist";

function CountryHeader({ countryCode }: { countryCode: string }) {
  const [selectionChanged, setSelectionChanged] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryCode);

  const { i18n } = useTranslation();

  const redirectToCountryPage = () => {
    if (selectedCountry === i18n.language) {
      setSelectionChanged(true);
      return;
    }

    window.history.pushState("", "", `/${selectedCountry}`);
    window.location.reload();
  };

  return (
    <div className={`country-header ${selectionChanged && "hidden"}`}>
      Set country or region language to use
      <select
        defaultValue={countryCode}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        {languages?.map((lng, i) => {
          return (
            <option value={lng.language} key={i}>
              {lng.country}
            </option>
          );
        })}
      </select>
      <Button
        label="Accept"
        primary={false}
        onClick={() => {
          redirectToCountryPage();
        }}
      />
    </div>
  );
}

export default CountryHeader;
