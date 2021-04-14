import "./CountryTerritory.css";
import ICountryTerritory from "../../model/CountryTerritory.model";

const CountryTerritory = function (countryTerritory: ICountryTerritory) {
  const smFlagSrc =
    "https://localhost:3000/src/assets/data/flags/16x16/" +
    countryTerritory.alpha2Code?.toLowerCase() +
    ".png";
  return (
    <div className="ct-box">
      <img src={smFlagSrc} />
      <div className="ct">
        <p className="ct-code border-bot">
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
