import "./CountryTerritory.css";
import ICountryTerritory from "../../model/CountryTerritory.model";

const CountryTerritory = function (countryTerritory: ICountryTerritory) {
  const flag = require(`../../assets/data/flags/16x16/${countryTerritory.alpha2Code?.toLowerCase()}.png`)
    .default;
  return (
    <div className="ct-box">
      <div className="ct">
        <p className="ct-code border-bot">
          <img src={flag} alt={countryTerritory.name} />
          &nbsp;&nbsp;&nbsp;
          <span>{countryTerritory.alpha2Code}</span>
          &nbsp;&nbsp;&nbsp;
          <span>{countryTerritory.alpha3Code}</span>
        </p>
        <p className="font-size-1x5">{countryTerritory.name}</p>
      </div>
    </div>
  );
};

export default CountryTerritory;
