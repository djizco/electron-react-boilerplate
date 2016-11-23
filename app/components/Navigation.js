import React from 'react';
import { Link } from 'react-router';

export default function Navigation() {
  return (
    <nav id="header" className="nav">
      <div className="nav-left">
        <Link to="/" activeStyle={{ textDecoration: 'none', color: '#DDD' }} className="nav-item is-brand">
          <h3 className="title is-3">Electron</h3>
        </Link>
      </div>
    </nav>
  );
}
