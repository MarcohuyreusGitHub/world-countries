import "./CtCol.css";

import CountryTerritory from "../CountryTerritory/CountryTerritory";
import ICountryTerritory from "../../intefaces/CountryTerritory.model";

const CtCol = function (countryTerritoryArray: { array: any[] }) {
  const items = [];
  for (let ct of countryTerritoryArray.array) {
    items.push(<CountryTerritory key={ct.alpha2Code} {...ct} />);
  }
  return <div className="">{items}</div>;
};

export default CtCol;
