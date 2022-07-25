import React, { Suspense } from 'react';

const SecondTestModule = React.lazy(() =>
  import('../components/Second-test-module')
);

export default function ThirdPage() {
  return (
    <div>
      <h1 className="center" style={{ marginBottom: '2rem' }}>
        Contains one lazy which is also lazy imported in page 2
      </h1>
      <p className="center" style={{ marginBottom: '2.5rem' }}>
        Adds an extra chunk in the network tab in the case of loading before the
        second page
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <Suspense fallback={<h2>Loading...</h2>}>
          <SecondTestModule />
        </Suspense>
      </div>
    </div>
  );
}
