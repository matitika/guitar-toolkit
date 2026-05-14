import "./Fretboard.css";
import { DOTS_FRETS } from "../utils/fretboard";

function Fretboard({ fretboard }) {
  return (
    <div
      className="fretboard-grid"
      style={{ gridTemplateColumns: `repeat(${fretboard[0].length}, 1fr)` }}
    >
      {fretboard.map((string, stringIndex) =>
        string.map((note, noteIndex) => (
          <div key={`${stringIndex}-${noteIndex}`} className="note">
            <span>{note}</span>
          </div>
        )),
      )}

      {fretboard[0].map((fret, fretIndex) => (
        <div className="dot">
          {DOTS_FRETS.includes(fretIndex + 1) ? "●" : ""}
        </div>
      ))}
    </div>
  );
}

export default Fretboard;
