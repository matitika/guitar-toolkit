import { getFretboard } from "./utils/fretboard";
import Fretboard from "./components/Fretboard";
import OpenStrings from "./components/OpenStrings";

function App() {
  const fretboardData = getFretboard(11);

  return (
    <div className="neck">
      <OpenStrings />
      <Fretboard fretboard={fretboardData} />
    </div>
  );
}

export default App;
