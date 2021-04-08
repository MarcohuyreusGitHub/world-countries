import * as data from "./assets/data/worlds2.json";
import CtCol from "./components/CtCol/CtCol";

function App() {
  return (
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
  );
}

export default App;
