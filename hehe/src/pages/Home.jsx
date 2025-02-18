import { useState, useEffect } from "react";
import { fetchElectionResults } from "../utils/api";

function Home() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getResults = async () => {
      const data = await fetchElectionResults();
      if (data) setResults(data);
    };

    getResults();
  }, []);

  {results.map((result, index) => (
    <li key={index}>
      {result.candidate}: {result.votes} votes
      {result.start && <p>Start: {result.start}</p>}
    </li>
  ))}
  
  return (
    <div>
      <h1>Election Results</h1>
      {results.length > 0 ? (
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              {result.candidate}: {result.votes} votes
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading results...</p>
      )}
    </div>
  );
}

export default Home;
