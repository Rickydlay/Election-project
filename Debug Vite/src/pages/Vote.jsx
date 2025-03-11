import { useState, useEffect } from "react";
import { fetchCandidates, voteForCandidate } from "../utils/api";

function Vote() {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadCandidates() {
      const data = await fetchCandidates();
      setCandidates(data);
      setLoading(false);
    }
    loadCandidates();
  }, []);

  const handleVote = async (candidateId) => {
    try {
      setMessage("Submitting vote...");
      await voteForCandidate(candidateId);
      setMessage("Vote successfully cast!");
    } catch (error) {
      setMessage("Error submitting vote.");
    }
  };

  return (
    <div>
      <h2>Vote for Your Candidate</h2>
      {loading ? <p>Loading candidates...</p> : (
        <ul>
          {candidates.map((candidate) => (
            <li key={candidate.id}>
              {candidate.name} - {candidate.party}
              <button onClick={() => handleVote(candidate.id)}>Vote</button>
            </li>
          ))}
        </ul>
      )}
      {message && <p>{message}</p>}
    </div>
  );
}

export default Vote;
