import IRegion from "model/Region.model";

const RegionSelect = function (props: { regions: IRegion[] }) {
  const items = [];
  for (let region of props.regions) {
    items.push(
      <option key={region.code} value={region.name}>
        {region.name}
      </option>
    );
  }
  return (
    <div className="">
      <select id="regions" className="form-select">
        {items}
      </select>
    </div>
  );
};

export default RegionSelect;
