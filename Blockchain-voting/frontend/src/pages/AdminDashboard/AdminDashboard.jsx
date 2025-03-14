import React, { useState } from 'react';

const AdminDashboard = () => {
  const [candidate, setCandidate] = useState({ name: '', party: '', img: '' });

  const handleAddCandidate = async (e) => {
    e.preventDefault();
    // Mock API call (replace with real endpoint later)
    const res = await fetch('/admin/add-candidate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(candidate),
    });
    const data = await res.json();
    if (data.success) {
      alert('Candidate added successfully');
      setCandidate({ name: '', party: '', img: '' }); // Clear form
    } else {
      alert('Failed to add candidate');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Dashboard</h1>
      <form onSubmit={handleAddCandidate}>
        <label>
          Name:
          <input
            value={candidate.name}
            onChange={(e) => setCandidate({ ...candidate, name: e.target.value })}
            required
          />
        </label>
        <br />
        <label>
          Party:
          <input
            value={candidate.party}
            onChange={(e) => setCandidate({ ...candidate, party: e.target.value })}
            required
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            value={candidate.img}
            onChange={(e) => setCandidate({ ...candidate, img: e.target.value })}
            required
          />
        </label>
        <br />
        <button type="submit">Add Candidate</button>
      </form>
    </div>
  );
};

export default AdminDashboard;