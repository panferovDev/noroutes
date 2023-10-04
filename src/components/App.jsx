import React from 'react';
import NavBar from './UI/NavBar';

export default function App({ children }) {
  return (
    <div className="container  mx-auto">
      <NavBar />
      {children}
    </div>
  );
}
