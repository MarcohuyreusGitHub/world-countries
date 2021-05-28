import React from "react";
import * as data from "./assets/data/json/worlds.json";
import RegionFilter from "./components/RegionFilter/RegionFilter";
import CountriesCol from "./components/CountriesCol/CountriesCol";
import Footer from "./layouts/Footer/Footer";
import Navbar from "./layouts/Navbar/Navbar";
import * as data2 from "assets/data/json/regions.json";

class App extends React.Component<{}, any> {
  regions = data2.regions;
  subregions: any;

  constructor(props: any) {
    super(props);
    this.state = {
      col1: data.worlds.slice(0, 84),
      col2: data.worlds.slice(84, 168),
      col3: data.worlds.slice(168, 250),
    };
  }

  regionFilter = (event: any) => {
    switch (event.target.value) {
      case "All": {
        this.state = {
          col1: data.worlds.slice(0, 84),
          col2: data.worlds.slice(84, 168),
          col3: data.worlds.slice(168, 250),
        };
        break;
      }
      default: {
        this.countriesOfRegion("region", event.target.value);
        return;
      }
    }
  };

  subregionFilter = (event: any) => {
    switch (event.target.value) {
      case "All": {
        this.state = {
          col1: data.worlds.slice(0, 84),
          col2: data.worlds.slice(84, 168),
          col3: data.worlds.slice(168, 250),
        };
        break;
      }
      default: {
        this.countriesOfRegion("subregion", event.target.value);
        return;
      }
    }
  };

  countriesOfRegion(regionType: string, regionName: string) {
    if (regionType === "region") {
      const newData = data.worlds.filter(
        (country) => country.region === regionName
      );
      let len = newData.length / 3;
      this.setState({
        col1: newData.slice(0, len),
        col2: newData.slice(len, len * 2),
        col3: newData.slice(len * 2, newData.length),
      });
    } else {
      const newData = data.worlds.filter(
        (country) => country.subregion === regionName
      );
      let len = newData.length / 3;
      this.setState({
        col1: newData.slice(0, len),
        col2: newData.slice(len, len * 2),
        col3: newData.slice(len * 2, newData.length),
      });
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <RegionFilter
          regionFilter={this.regionFilter}
          subregionFilter={this.subregionFilter}
          regions={data2.regions}
        />
        <div className="main-container">
          <div className="ct-col"></div>
          <div className="ct-col">
            <CountriesCol countries={this.state.col1} />
          </div>
          <div className="ct-col">
            <CountriesCol countries={this.state.col2} />
          </div>
          <div className="ct-col">
            <CountriesCol countries={this.state.col3} />
          </div>
          <div className="ct-col"></div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
