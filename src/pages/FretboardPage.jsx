import { getFretboard } from "../utils/fretboard";
import OpenStrings from "../components/OpenStrings";
import Fretboard from "../components/Fretboard";

function FretboardPage() {
  const fretboardData = getFretboard(11);

  return (
    <div className="neck">
      <OpenStrings />
      <Fretboard fretboard={fretboardData} />
    </div>
  );
}

export default FretboardPage;
