import React from 'react';
import { Link } from 'react-router-dom';

const Expenses = () => {
  return (
    <main style={{ padding: '1rem 0' }}>
          <h2>Expenses</h2>
          <Link to='/'>Back home</Link>
    </main>
  );
};

export default Expenses;
