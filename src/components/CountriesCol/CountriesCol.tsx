import "./CountriesCol.css";

import Country from "../Country/Country";
import ICountry from "../../model/Country.model";

const CountriesCol = function (props: { countries: ICountry[] }) {
  const items = [];
  for (let country of props.countries) {
    items.push(<Country key={country.alpha2Code} {...country} />);
  }
  return <div className="">{items}</div>;
};

export default CountriesCol;
