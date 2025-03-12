import { useState } from "react";
import styles from "./Dashboard.module.css";

function AdminDashboard() {
  const [candidate, setCandidate] = useState("");
  const [party, setParty] = useState("");
  const [lga, setLga] = useState("");
  const [ra, setRa] = useState("");
  const [votes, setVotes] = useState("");
  const [expectedVotes, setExpectedVotes] = useState("");
  const [officerID, setOfficerID] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/results/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ candidate, party, lga, ra, votes, expectedVotes, officerID }),
    });

    const data = await response.json();
    if (response.ok) {
      setMessage("✅ Result uploaded successfully!");
    } else {
      setMessage(data.error || "❌ Failed to upload result");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Admin Dashboard - Upload Results</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Candidate Name:
          <input type="text" value={candidate} onChange={(e) => setCandidate(e.target.value)} required />
        </label>

        <label>
          Candidate Party:
          <input type="text" value={party} onChange={(e) => setParty(e.target.value)} required />
        </label>

        <label>
          LGA:
          <input type="text" value={lga} onChange={(e) => setLga(e.target.value)} required />
        </label>

        <label>
          RA (Registration Area):
          <input type="text" value={ra} onChange={(e) => setRa(e.target.value)} required />
        </label>

        <label>
          Votes:
          <input type="number" value={votes} onChange={(e) => setVotes(e.target.value)} required />
        </label>

        <label>
          Expected Votes:
          <input type="number" value={expectedVotes} onChange={(e) => setExpectedVotes(e.target.value)} required />
        </label>

        <label>
          Officer ID:
          <input type="text" value={officerID} onChange={(e) => setOfficerID(e.target.value)} required />
        </label>

        <button type="submit">Upload Result</button>
      </form>

      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
}

export default AdminDashboard;
