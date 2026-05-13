export const NOTES = [
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb",
  "E",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab",
];
const NUM_STRINGS = 6;
export const STANDARD_TUNING = ["E", "A", "D", "G", "B", "E"];

/*
 * Returns the note on a specific string and fret
 * String 1 is high E and string 6 is Low E
 */
export function getNote(string, fret) {
  return NOTES[(NOTES.indexOf(STANDARD_TUNING.at(0 - string)) + fret) % 12];
}

/*
 * Returns a 2D array representing the fretboard up to the given number of frets
 */
export function getFretboard(numFrets) {
  const fretboard = [];

  for (let string = 1; string <= NUM_STRINGS; string++) {
    const string_notes = [];

    for (let fret = 0; fret <= numFrets; fret++) {
      string_notes.push(getNote(string, fret));
    }

    fretboard.push(string_notes);
  }

  return fretboard;
}
