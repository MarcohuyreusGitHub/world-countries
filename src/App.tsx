import * as data from "./assets/data/worlds2.json";
import AreaSelector from "./components/AreaSelector/AreaSelector";
import CtCol from "./components/CtCol/CtCol";
import Footer from "./layouts/Footer/Footer";
import Navbar from "./layouts/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <AreaSelector />
      <div className="main-container">
        <div className="ct-col"></div>
        <div className="ct-col">
          <CtCol array={data.worlds} />
        </div>
        <div className="ct-col">
          <CtCol array={data.worlds} />
        </div>
        <div className="ct-col">
          <CtCol array={data.worlds} />
        </div>
        <div className="ct-col"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
