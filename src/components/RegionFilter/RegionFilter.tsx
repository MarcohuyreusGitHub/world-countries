import React from "react";
import "./RegionFilter.css";
import * as data from "assets/data/json/regions.json";
import RegionSelect from "./RegionSelect";
import SubregionSelect from "./SubregionSelect";

class RegionFilter extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="">
        <label htmlFor="regions">Regions</label>
        <RegionSelect regions={data.regions} />

        <label htmlFor="subregions">Subegions</label>
        <SubregionSelect subregions={data.regions[0].subregions} />
      </div>
    );
  }
}

export default RegionFilter;
