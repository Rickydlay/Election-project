import { useState, useEffect } from "react";
import { fetchResults } from "../utils/api";

function Results() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadResults() {
      const data = await fetchResults();
      setResults(data);
      setLoading(false);
    }
    loadResults();
  }, []);

  return (
    <div>
      <h2>Election Results</h2>
      {loading ? <p>Loading results...</p> : (
        <table>
          <thead>
            <tr>
              <th>Candidate</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index}>
                <td>{result.candidateName}</td>
                <td>{result.votes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Results;
