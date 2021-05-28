import React from "react";

class RegionSelect extends React.Component<any, any> {
  render() {
    const items = [];
    for (let region of this.props.regions) {
      items.push(
        <option key={region.code} value={region.name}>
          {region.name}
        </option>
      );
    }

    return (
      <div className="">
        <select
          id="regions"
          className="form-select form-select-lg rounded region-select"
          onChange={this.props.regionFilter}
        >
          {items}
        </select>
      </div>
    );
  }
}

export default RegionSelect;
