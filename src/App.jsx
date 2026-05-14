import { Routes, Route } from "react-router-dom";
import FretboardPage from "./pages/FretboardPage";
import IntervalsPage from "./pages/IntervalsPage";
import NoteGuessingGame from "./pages/NoteGuessingGame";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FretboardPage />} />
      <Route path="/game" element={<NoteGuessingGame />} />
      <Route path="/intervals" element={<IntervalsPage />} />
    </Routes>
  );
}
export default App;
