import "./AreaSelector.css";

const AreaSelector = function () {
  return (
    <div className="areas-select text-center">
      <input type="radio" id="all" name="areas" value="all" />
      &nbsp;
      <label htmlFor="all">All</label>
      &nbsp;&nbsp;&nbsp;
      <input type="radio" id="asia" name="areas" value="asia" />
      &nbsp;
      <label htmlFor="asia">Asia</label>
      &nbsp;&nbsp;&nbsp;
      <input type="radio" id="europe" name="areas" value="europe" />
      &nbsp;
      <label htmlFor="europe">Europe</label>
      &nbsp;&nbsp;&nbsp;
      <input type="radio" id="africa" name="areas" value="africa" />
      &nbsp;
      <label htmlFor="africa">Africa</label>
      &nbsp;&nbsp;&nbsp;
      <input type="radio" id="northAmerica" name="areas" value="northAmerica" />
      &nbsp;
      <label htmlFor="northAmerica">North America</label>
      &nbsp;&nbsp;&nbsp;
      <input type="radio" id="southAmerica" name="areas" value="southAmerica" />
      &nbsp;
      <label htmlFor="southAmerica">South America</label>
      &nbsp;&nbsp;&nbsp;
      <input type="radio" id="australia" name="areas" value="australia" />
      &nbsp;
      <label htmlFor="australia">Australia</label>
      &nbsp;&nbsp;&nbsp;
      <input type="radio" id="artic" name="areas" value="artic" />
      &nbsp;
      <label htmlFor="artic">Artic</label>
      &nbsp;&nbsp;&nbsp;
      <input type="radio" id="antarctica" name="areas" value="antarctica" />
      &nbsp;
      <label htmlFor="antarctica">Antarctica</label>
    </div>
  );
};

export default AreaSelector;
