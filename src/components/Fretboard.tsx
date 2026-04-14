import "./Fretboard.css";

function Fretboard() {
  const strings  = Array.from({ length: 6});
  const frets = Array.from({ length: 12});

  return (
  <div className="fretboard">
    {strings.map((_, s) => (
      <div key={s} className="string">
        {frets.map((_, f) => (
          <div key={f} className="fret">
            {s}, {f}
          </div>
        ))}
      </div>
    ))}
  </div>
  ); 
}

export default Fretboard;
