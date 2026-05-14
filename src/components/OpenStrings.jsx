import { STANDARD_TUNING } from "../utils/fretboard";
import "./Fretboard.css";

function OpenStrings({ onCellClick, hasGuessed, highlightedCells }) {
  return (
    <div className="open-strings">
      {STANDARD_TUNING.slice()
        .reverse()
        .map((note, noteIndex) => (
          <div
            key={`${noteIndex}-0`}
            className={`open-note ${!hasGuessed ? "hidden" : ""} ${highlightedCells.some((cell) => cell.string === noteIndex && cell.fret === 0) ? "highlighted" : ""}`}
            onClick={() => onCellClick(noteIndex, 0)}
          >
            <span>{note}</span>
          </div>
        ))}
    </div>
  );
}

export default OpenStrings;
