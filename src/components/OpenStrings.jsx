import { STANDARD_TUNING } from "../utils/fretboard";
import "./Fretboard.css";

function OpenStrings() {
  return (
    <div className="open-strings">
      {STANDARD_TUNING.slice()
        .reverse()
        .map((note, noteIndex) => (
          <div key={`${noteIndex}-0`} className="open-note">
            <span>{note}</span>
          </div>
        ))}
    </div>
  );
}

export default OpenStrings;
