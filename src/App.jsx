import { getFretboard } from "./utils/fretboard";
import Fretboard from "./components/Fretboard";

function App() {
  const fretboardData = getFretboard(12);

  return <Fretboard fretboard={fretboardData} />;
}

export default App;
