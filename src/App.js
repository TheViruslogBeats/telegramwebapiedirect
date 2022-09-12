import { Routes, Route } from "react-router-dom";
import Redirect from "./Redirect";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Redirect />} />
    </Routes>
  );
}

export default App;
