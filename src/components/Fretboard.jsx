import "./Fretboard.css";

function Fretboard({ fretboard }) {
  return (
    <div
      className="fretboard-grid"
      style={{ gridTemplateColumns: `repeat(${fretboard[0].length}, auto)` }}
    >
      {fretboard.map((string, stringIndex) =>
        string.map((note, noteIndex) => (
          <div key={`${stringIndex}-${noteIndex}`} className="note">
            {note}
          </div>
        )),
      )}
    </div>
  );
}

export default Fretboard;
