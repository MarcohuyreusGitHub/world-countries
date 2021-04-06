import "./CountryTerritory.css";
import ICountryTerritory from "../../intefaces/CountryTerritory.model";

const CountryTerritory = function (countryTerritory: ICountryTerritory) {
  return (
    <div className="ct-box">
      <div className="ct">
        <p className="ct-code border-bot">{countryTerritory.code}</p>
        <p className="font-size-1x5">{countryTerritory.name}</p>
      </div>
    </div>
  );
};

export default CountryTerritory;
