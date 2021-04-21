import React from "react";
import "./AreaSelector.css";

class RegionSelector extends React.Component<any, any> {
  // constructor(props: any) {
  //   super(props);
  // }
  render() {
    return (
      <div className="areas-select text-center">
        <input
          type="radio"
          id="all"
          name="areas"
          value="All"
          onChange={this.props.areaFilter}
        />
        &nbsp;
        <label htmlFor="all">All</label>
        &nbsp;&nbsp;&nbsp;
        <input
          type="radio"
          id="asia"
          name="areas"
          value="Asia"
          onChange={this.props.areaFilter}
        />
        &nbsp;
        <label htmlFor="asia">Asia</label>
        &nbsp;&nbsp;&nbsp;
        <input
          type="radio"
          id="europe"
          name="areas"
          value="Europe"
          onChange={this.props.areaFilter}
        />
        &nbsp;
        <label htmlFor="europe">Europe</label>
        &nbsp;&nbsp;&nbsp;
        <input
          type="radio"
          id="africa"
          name="areas"
          value="Africa"
          onChange={this.props.areaFilter}
        />
        &nbsp;
        <label htmlFor="africa">Africa</label>
        &nbsp;&nbsp;&nbsp;
        <input
          type="radio"
          id="northAmerica"
          name="areas"
          value="NorthAmerica"
          onChange={this.props.areaFilter}
        />
        &nbsp;
        <label htmlFor="northAmerica">North America</label>
        &nbsp;&nbsp;&nbsp;
        <input
          type="radio"
          id="southAmerica"
          name="areas"
          value="SouthAmerica"
          onChange={this.props.areaFilter}
        />
        &nbsp;
        <label htmlFor="southAmerica">South America</label>
        &nbsp;&nbsp;&nbsp;
        <input
          type="radio"
          id="oceania"
          name="areas"
          value="Oceania"
          onChange={this.props.areaFilter}
        />
        &nbsp;
        <label htmlFor="oceania">Oceania</label>
        &nbsp;&nbsp;&nbsp;
        <input
          type="radio"
          id="artic"
          name="areas"
          value="Artic"
          onChange={this.props.areaFilter}
        />
        &nbsp;
        <label htmlFor="artic">Artic</label>
        &nbsp;&nbsp;&nbsp;
        <input
          type="radio"
          id="antarctica"
          name="areas"
          value="Antarctica"
          onChange={this.props.areaFilter}
        />
        &nbsp;
        <label htmlFor="antarctica">Antarctica</label>
      </div>
    );
  }
}

export default RegionSelector;
