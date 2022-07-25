import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

export default function Navbar() {
  return (
    <nav className="navbar">
      {[
        { route: '/', name: 'Home' },
        { route: '/first-page', name: 'First Page' },
        { route: '/second-page', name: 'Second Page' },
        { route: '/third-page', name: 'Third Page' },
      ].map(({ route, name }) => (
        <Link to={route}>
          <Button
            variant="outlined"
            size="small"
            style={{
              backgroundColor: '#005f73',
              color: 'white',
            }}
          >
            {name}
          </Button>
        </Link>
      ))}
    </nav>
  );
}
