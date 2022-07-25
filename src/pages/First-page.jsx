import React, { Suspense } from 'react';

const FirstTestModule = React.lazy(() =>
  import('../components/First-test-module')
);

export default function FirstPage() {
  return (
    <div>
      <h1 className="center" style={{ marginBottom: '2rem' }}>
        Contains One Lazy Which is also imported in normal way in Home
      </h1>
      <p className="center" style={{ marginBottom: '2.5rem' }}>
        Although FirstTestModule is lazy loaded but there is no extra chunk in
        the network tab
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <Suspense fallback={<h2>Loading...</h2>}>
          <FirstTestModule />
        </Suspense>
      </div>
    </div>
  );
}
