import React from "react";

import "./second-slide.scss";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { setGridSystem } from "../../actions";
import { Button } from "../button/Button";
import { useTranslation } from "react-i18next";
import { FeaturesGrid } from "../features-grid/FeaturesGrid";

function SecondSlide() {
  const gridSystem = useSelector((state: RootStateOrAny) => state.gridSystem);
  const dispatch = useDispatch();
  const featureResponse = useSelector(
    (state: RootStateOrAny) => state.featureResponse
  );

  const nextCardPosition =
    gridSystem === 2 ? setGridSystem(3) : setGridSystem(2);

  const { t } = useTranslation();

  return (
    <div className="app-secondslide">
      <h1>{t("ourFeatures")}</h1>
      <Button
        label={`Set Grid to ${gridSystem === 2 ? 3 : 2}`}
        onClick={() => dispatch(nextCardPosition)}
        primary={false}
      />

      <FeaturesGrid items={featureResponse} templateColumns={gridSystem} />
    </div>
  );
}

export default SecondSlide;
