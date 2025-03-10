import { useState, useEffect } from "react";
import styles from "./Home.module.css";

function Home() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/results")
      .then((res) => res.json())
      .then((data) => setResults(data));
  }, []);

  return (
    <div className="container">
      <h2>Live Election Results</h2>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Candidate</th>
            <th>RA</th>
            <th>LGA</th>
            <th>Votes</th>
            <th>Expected Votes</th>
            <th>Officer ID</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {results.length > 0 ? results.map((result, index) => (
            <tr key={index}>
              <td>{result.candidate}</td>
              <td>{result.ra}</td>
              <td>{result.lga}</td>
              <td>{result.votes}</td>
              <td>{result.expectedVotes}</td>
              <td>{result.officerID}</td>
              <td>{new Date(result.timestamp).toLocaleString()}</td>
            </tr>
          )) : (
            <tr>
              <td colSpan="7" className="text-center text-danger">No results available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
