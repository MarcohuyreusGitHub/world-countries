import React from "react";

class SubregionSelect extends React.Component<any, any> {
  render() {
    const items = [];
    for (let subregion of this.props.subregions) {
      items.push(
        <option key={subregion.code} value={subregion.name}>
          {subregion.name}
        </option>
      );
    }

    return (
      <div className="">
        <select
          id="subregions"
          className="form-select form-select-lg rounded region-select"
          onChange={this.props.regionFilter}
        >
          {items}
        </select>
      </div>
    );
  }
}

export default SubregionSelect;
