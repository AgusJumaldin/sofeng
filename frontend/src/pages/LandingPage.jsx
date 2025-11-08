import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Body Visualizer</h1>
      <p>Welcome! This is the landing page of your MERN app.</p>
      <p>Click below to start entering your body measurements.</p>

      <Link
        to="/measurements"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 20px",
          borderRadius: "6px",
          border: "1px solid #888",
          textDecoration: "none"
        }}
      >
        Go to Measurements
      </Link>
    </div>
  );
}

export default LandingPage;
