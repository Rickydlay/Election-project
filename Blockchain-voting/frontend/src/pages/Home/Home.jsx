import React from 'react';
import CandidateCard from '../../components/CandidateCard/CandidateCard';
import TabularResult from '../../components/TabularResult/TabularResult';

const Home = () => {
  // Mock data for now (replace with API fetch later)
  const candidates = [
    { id: 1, img: 'https://via.placeholder.com/200', name: 'John Doe', party: 'Party A', votes: 120 },
    { id: 2, img: 'https://via.placeholder.com/200', name: 'Jane Smith', party: 'Party B', votes: 80 },
  ];
  const totalVotes = candidates.reduce((sum, c) => sum + c.votes, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Featured Candidates</h1>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        {candidates.map((candidate) => (
          <CandidateCard
            key={candidate.id}
            img={candidate.img}
            name={candidate.name}
            party={candidate.party}
            votes={candidate.votes}
            totalVotes={totalVotes}
          />
        ))}
      </div>
      <TabularResult results={candidates} />
    </div>
  );
};

export default Home;