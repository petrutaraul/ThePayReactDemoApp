import React from "react";
import { useTranslation } from "react-i18next";
import "./header.scss";
import Smartphone from "./smartphone/smartphone";

function Header() {
  const { t } = useTranslation();

  return (
    <div className="app-header">
      <h1 className="app-header__promotional">
        <p className="main-header">{t("payment")}</p>
      </h1>
      <div className="app-header__smartphone">
        <Smartphone />
      </div>
    </div>
  );
}

export default Header;
