import React from 'react';
import styles from './CandidateCard.module.css';

const CandidateCard = ({ img, name, party, votes, totalVotes }) => {
  const percentage = totalVotes ? ((votes / totalVotes) * 100).toFixed(1) : 0;

  return (
    <div className={styles.card}>
      <img src={img} alt={name} className={styles.image} />
      <h3>{name}</h3>
      <p>Party: {party}</p>
      <p>Votes: {votes}</p>
      <p>Percentage: {percentage}%</p>
    </div>
  );
};

export default CandidateCard;