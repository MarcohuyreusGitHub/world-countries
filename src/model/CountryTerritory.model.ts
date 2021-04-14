import ICurrency from "./Currency.model";
import ILanguage from "./Language.model";
import IRegionalBloc from "./RegionalBlocs.model";
import ITranslation from "./Translation.model";

export default interface ICountryTerritory {
  name?: string | null;
  topLevelDomain?: string[] | null;
  alpha2Code?: string | null;
  alpha3Code?: string | null;
  callingCodes?: string[] | null;
  capital?: string | null;
  altSpellings?: string[] | null;
  region?: string | null;
  subregion?: string | null;
  population?: number | null;
  latlng?: number[] | null;
  demonym?: string | null;
  area?: number | null;
  gini?: number | null;
  timezones?: string[] | null;
  borders?: string[] | null;
  nativeName?: string | null;
  numericCode?: string | null;
  currencies?: ICurrency[] | null;
  languages?: ILanguage[] | null;
  translations?: ITranslation | null;
  flag?: string | null;
  regionalBlocs?: IRegionalBloc[] | null;
  cioc?: string | null;
}
