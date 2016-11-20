import React from 'react';
import { Link } from 'react-router';

export default function Navigation() {
  return (
    <div className="main-header">
      <Link to="/" activeStyle={{ textDecoration: 'none', color: '#DDD' }}>
        <h2 className="margin-sm">App</h2>
      </Link>
    </div>
  );
}
