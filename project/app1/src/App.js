import React from 'react';
import logo from './logo.svg';
import ClassComponent from './pages/ClassComponent';
import './App.css';

function App() {
  return (
    <div className="app">
      <img style={{ width: '100px' }} alt="" src={logo} />
      <ClassComponent />
    </div>
  );
}

export default App;
