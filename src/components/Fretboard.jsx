import "./Fretboard.css";
import { DOTS_FRETS } from "../utils/fretboard";

function Fretboard({ fretboard, onCellClick, hasGuessed, highlightedCells }) {
  return (
    <div
      className="fretboard-grid"
      style={{ gridTemplateColumns: `repeat(${fretboard[0].length}, 1fr)` }}
    >
      {fretboard.map((string, stringIndex) =>
        string.map((note, noteIndex) => (
          <div
            key={`${stringIndex}-${noteIndex + 1}`}
            className={`note
              ${highlightedCells.some((cell) => cell.string === stringIndex && cell.fret === noteIndex + 1) ? "highlighted" : ""}
              ${!hasGuessed ? "hidden" : ""}`}
            onClick={() => onCellClick(stringIndex, noteIndex + 1)}
          >
            <span>{note}</span>
          </div>
        )),
      )}

      {fretboard[0].map((fret, fretIndex) => (
        <div key={fretIndex} className="dot">
          {DOTS_FRETS.includes(fretIndex + 1) ? "●" : ""}
        </div>
      ))}
    </div>
  );
}

export default Fretboard;
