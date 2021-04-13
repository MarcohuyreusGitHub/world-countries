import "./CountryTerritory.css";
import ICountryTerritory from "../../intefaces/CountryTerritory.model";

const CountryTerritory = function (countryTerritory: ICountryTerritory) {
  return (
    <div className="ct-box">
      <div className="ct">
        <p className="ct-code border-bot">
          <span>{countryTerritory.alpha2Code}</span>
          &nbsp;&nbsp;&nbsp;
          <span>{countryTerritory.alpha3Code}</span>
        </p>
        <p className="font-size-1x5">{countryTerritory.capital}</p>
      </div>
    </div>
  );
};

export default CountryTerritory;
