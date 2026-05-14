import { useState } from "react";
import { getFretboard, getNote, getRandomNote } from "../utils/fretboard";
import Fretboard from "../components/Fretboard";
import OpenStrings from "../components/OpenStrings";

function NoteGuessingGame() {
  const [currentNote, setCurrentNote] = useState(getRandomNote());
  const [selectedCell, setSelectedCell] = useState(null);
  const [hasGuessed, setHasGuessed] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);

  const fretboardData = getFretboard(11);

  function handleCellClick(stringIndex, fretIndex) {
    const correct = getNote(stringIndex, fretIndex) === currentNote;
    setIsCorrect(correct);
    if (correct) setScore(score + 1);
    setHasGuessed(true);
    setSelectedCell({ string: stringIndex, fret: fretIndex });
  }

  const correctCells = hasGuessed
    ? fretboardData.flatMap((string, stringIndex) =>
        string
          .map((note, fretIndex) => ({ string: stringIndex, fret: fretIndex }))
          .filter(({ string, fret }) => getNote(string, fret) === currentNote),
      )
    : [];

  return (
    <>
      <h1>Note Guessing Game</h1>
      <h2 className="note-to-guess">Find: {currentNote}</h2>
      <div className="neck">
        <OpenStrings
          onCellClick={handleCellClick}
          hasGuessed={hasGuessed}
          highlightedCells={correctCells}
        />
        <Fretboard
          fretboard={fretboardData}
          onCellClick={handleCellClick}
          hasGuessed={hasGuessed}
          highlightedCells={correctCells}
        />
      </div>
      <div className="game-controls">
        <div className="score">Score: {score}</div>
        <button
          type="button"
          className={`next ${!hasGuessed ? "hidden" : ""}`}
          onClick={() => {
            setCurrentNote(getRandomNote());
            setHasGuessed(false);
            setIsCorrect(false);
            setSelectedCell(null);
          }}
        >
          Next
        </button>
        <button
          type="button"
          onClick={() => {
            setScore(0);
            setCurrentNote(getRandomNote());
            setHasGuessed(false);
            setIsCorrect(false);
            setSelectedCell(null);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default NoteGuessingGame;
