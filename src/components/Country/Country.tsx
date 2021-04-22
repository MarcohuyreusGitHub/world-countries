import "./Country.css";
import ICountryTerritory from "../../model/Country.model";

const CountryTerritory = function (countryTerritory: ICountryTerritory) {
  const flag = require(`../../assets/data/flags/16x16/${countryTerritory.alpha2Code?.toLowerCase()}.png`)
    .default;
  return (
    <div className="country-box">
      <div className="country">
        <p className="country-code border-bot">
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
