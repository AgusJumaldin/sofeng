import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MeasurementsPage from "./pages/MeasurementsPage";
import ResultsPage from "./pages/ResultsPage";

function App() {
  return (
    <div>
      {/* Simple top nav so you can click between pages */}
      <nav
        style={{
          padding: "10px 20px",
          borderBottom: "1px solid #444",
          marginBottom: "20px"
        }}
      >
        <Link to="/" style={{ marginRight: "15px" }}>
          Landing
        </Link>
        <Link to="/measurements" style={{ marginRight: "15px" }}>
          Measurements
        </Link>
        <Link to="/results">Results</Link>
      </nav>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/measurements" element={<MeasurementsPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </div>
  );
}

export default App;
