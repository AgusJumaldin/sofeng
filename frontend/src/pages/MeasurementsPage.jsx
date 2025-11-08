import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MeasurementsPage() {
  const [bust, setBust] = useState("");
  const [waist, setWaist] = useState("");
  const [hips, setHips] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // send data to Results page
    navigate("/results", {
      state: { bust, waist, hips }
    });
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h1>Measurements</h1>
      <p>Enter your measurements (in cm, for example).</p>

      <form onSubmit={handleSubmit}>
        <label>
          Bust:
          <input
            type="number"
            value={bust}
            onChange={(e) => setBust(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Waist:
          <input
            type="number"
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Hips:
          <input
            type="number"
            value={hips}
            onChange={(e) => setHips(e.target.value)}
            required
          />
        </label>
        <br />

        <button type="submit" style={{ marginTop: "16px" }}>
          See Results
        </button>
      </form>
    </div>
  );
}

export default MeasurementsPage;
