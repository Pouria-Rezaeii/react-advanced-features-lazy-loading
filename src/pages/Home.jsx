import React from 'react';
import FirstTestModule from '../components/First-test-module';

export default function Home() {
  return (
    <div>
      <h1 className="center" style={{ marginBottom: '2rem' }}>
        Home - No Lazy Loading
      </h1>
      <div className="container-center">
        <FirstTestModule />
      </div>
    </div>
  );
}
