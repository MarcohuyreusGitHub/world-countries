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
    const items = [];
    for (let region of this.props.regions) {
      items.push(
        <option key={region.code} value={region.name}>
          {region.name}
        </option>
      );
    }

    const items2 = [];
    for (let subregion of this.props.subregions) {
      items2.push(
        <option key={subregion.code} value={subregion.name}>
          {subregion.name}
        </option>
      );
    }

    return (
      // <div className="regions-filter form-inline">
      //   <label htmlFor="regions">Region&nbsp;</label>
      //   <RegionSelect regions={data.regions} />
      //   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      //   <label htmlFor="subregions">Subegion&nbsp;</label>
      //   <SubregionSelect subregions={data.regions[0].subregions} />
      // </div>

      <div className="regions-filter form-inline">
        <label htmlFor="regions">Region&nbsp;</label>
        <div className="">
          <select
            id="regions"
            className="form-select form-select-lg rounded region-select"
            onChange={this.props.regionFilter}
          >
            {items}
          </select>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label htmlFor="subregions">Subegion&nbsp;</label>
        <div className="">
          <select
            id="subregions"
            className="form-select form-select-lg rounded region-select"
            onChange={this.props.subregionFilter}
          >
            {items2}
          </select>
        </div>
      </div>
    );
  }
}

export default RegionFilter;
