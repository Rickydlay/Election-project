import React from 'react';
import styles from './TabularResult.module.css';

const TabularResult = ({ results }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Party</th>
          <th>Votes</th>
        </tr>
      </thead>
      <tbody>
        {results.map((candidate, index) => (
          <tr key={index}>
            <td>{candidate.name}</td>
            <td>{candidate.party}</td>
            <td>{candidate.votes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TabularResult;