import React from "react";
import "./RegionFilter.css";
import * as regions from "assets/data/json/regions.json";
import * as subregions from "assets/data/json/subregions.json";

class RegionFilter extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    // return (
    //   <div className="regions-select text-center">
    //     <input
    //       type="radio"
    //       id="all"
    //       name="regions"
    //       value="All"
    //       onChange={this.props.regionFilter}
    //     />
    //     &nbsp;
    //     <label htmlFor="all">All</label>
    //     &nbsp;&nbsp;&nbsp;
    //     <input
    //       type="radio"
    //       id="asia"
    //       name="regions"
    //       value="Asia"
    //       onChange={this.props.regionFilter}
    //     />
    //     &nbsp;
    //     <label htmlFor="asia">Asia</label>
    //     &nbsp;&nbsp;&nbsp;
    //     <input
    //       type="radio"
    //       id="europe"
    //       name="regions"
    //       value="Europe"
    //       onChange={this.props.regionFilter}
    //     />
    //     &nbsp;
    //     <label htmlFor="europe">Europe</label>
    //     &nbsp;&nbsp;&nbsp;
    //     <input
    //       type="radio"
    //       id="africa"
    //       name="regions"
    //       value="Africa"
    //       onChange={this.props.regionFilter}
    //     />
    //     &nbsp;
    //     <label htmlFor="africa">Africa</label>
    //     &nbsp;&nbsp;&nbsp;
    //     <input
    //       type="radio"
    //       id="northAmerica"
    //       name="regions"
    //       value="NorthAmerica"
    //       onChange={this.props.regionFilter}
    //     />
    //     &nbsp;
    //     <label htmlFor="northAmerica">North America</label>
    //     &nbsp;&nbsp;&nbsp;
    //     <input
    //       type="radio"
    //       id="southAmerica"
    //       name="regions"
    //       value="SouthAmerica"
    //       onChange={this.props.regionFilter}
    //     />
    //     &nbsp;
    //     <label htmlFor="southAmerica">South America</label>
    //     &nbsp;&nbsp;&nbsp;
    //     <input
    //       type="radio"
    //       id="oceania"
    //       name="regions"
    //       value="Oceania"
    //       onChange={this.props.regionFilter}
    //     />
    //     &nbsp;
    //     <label htmlFor="oceania">Oceania</label>
    //     &nbsp;&nbsp;&nbsp;
    //     <input
    //       type="radio"
    //       id="artic"
    //       name="regions"
    //       value="Artic"
    //       onChange={this.props.regionFilter}
    //     />
    //     &nbsp;
    //     <label htmlFor="artic">Artic</label>
    //     &nbsp;&nbsp;&nbsp;
    //     <input
    //       type="radio"
    //       id="antarctica"
    //       name="regions"
    //       value="Antarctica"
    //       onChange={this.props.regionFilter}
    //     />
    //     &nbsp;
    //     <label htmlFor="antarctica">Antarctica</label>
    //   </div>
    // );

    return (
      <div className="">
        <label htmlFor="regions">Regions</label>
        <select id="regions" className="form-select" defaultValue="1">
          for(let r of regions){}
        </select>

        <label htmlFor="subregions">Subegions</label>
        <select id="subregions" className="form-select" defaultValue="1">
          <option value="0">Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    );
  }
}

export default RegionFilter;
