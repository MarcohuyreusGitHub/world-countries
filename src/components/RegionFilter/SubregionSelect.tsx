import IRegion from "model/Region.model";

const SubregionSelect = function (props: { subregions: IRegion[] }) {
  const items = [];
  for (let subregion of props.subregions) {
    items.push(
      <option key={subregion.code} value={subregion.name}>
        {subregion.name}
      </option>
    );
  }
  return (
    <div className="">
      <select id="subregions" className="form-select">
        {items}
      </select>
    </div>
  );
};

export default SubregionSelect;
