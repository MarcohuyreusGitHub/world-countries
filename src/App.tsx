import * as data from "./assets/data/json/worlds.json";
import AreaSelector from "./components/AreaSelector/AreaSelector";
import CtCol from "./components/CtCol/CtCol";
import Footer from "./layouts/Footer/Footer";
import Navbar from "./layouts/Navbar/Navbar";

function App() {
  const col1 = data.worlds.slice(0, 84);
  const col2 = data.worlds.slice(84, 168);
  const col3 = data.worlds.slice(168, 250);
  return (
    <div>
      <Navbar />
      <AreaSelector />
      <div className="main-container">
        <div className="ct-col"></div>
        <div className="ct-col">
          <CtCol array={col1} />
        </div>
        <div className="ct-col">
          <CtCol array={col2} />
        </div>
        <div className="ct-col">
          <CtCol array={col3} />
        </div>
        <div className="ct-col"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
