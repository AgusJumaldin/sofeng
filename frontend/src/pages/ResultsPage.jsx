import { useLocation, useNavigate } from "react-router-dom";

function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  // If user comes here directly without measurements
  if (!data) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h1>No Results Yet</h1>
        <p>You need to enter your measurements first.</p>
        <button onClick={() => navigate("/measurements")}>
          Go to Measurements
        </button>
      </div>
    );
  }

  const { bust, waist, hips } = data;

  // later you’ll put body-shape logic here
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Results</h1>
      <p>Here are the measurements you entered:</p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>Bust: {bust}</li>
        <li>Waist: {waist}</li>
        <li>Hips: {hips}</li>
      </ul>

      <button style={{ marginTop: "16px" }} onClick={() => navigate("/measurements")}>
        Edit Measurements
      </button>
    </div>
  );
}

export default ResultsPage;
