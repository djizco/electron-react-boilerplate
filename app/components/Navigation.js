import React from 'react';
import { Link } from 'react-router';

export default function Navigation() {
  return (
    <nav id="header" className="nav">
      <div className="nav-left">
        <Link to="/" className="nav-item is-brand">
          <h3 className="title is-3">Electron</h3>
        </Link>
      </div>
      <div className="nav-center">
        <Link to="/" className="nav-item">
          <span className="icon is-medium">
            <i className="fa fa-home" />
          </span>
        </Link>
      </div>
      <div className="nav-right">
        <Link to="/" className="nav-item">
          <h6 className="title is-6">Home</h6>
        </Link>
      </div>
    </nav>
  );
}
