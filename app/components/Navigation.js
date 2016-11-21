import React from 'react';
import { Link } from 'react-router';

export default function Navigation() {
  return (
    <div className="main-header nav">
      <div className="nav-left">
        <Link to="/" activeStyle={{ textDecoration: 'none', color: '#DDD' }} className="nav-item is-brand">
          <h2 className="margin-sm">App</h2>
        </Link>
      </div>
    </div>
  );
}
