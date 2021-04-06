import * as data from "./assets/data/worlds2.json";
import CtCol from "./components/CtCol/CtCol";

function App() {
  return (
    <div className="ct-col">
      <CtCol array={data.worlds} />
    </div>
  );
}

export default App;
