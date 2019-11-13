import React from 'react';
import logo from './logo.svg';
// import ClassComponent from './pages/ClassComponent';
import EventHandle from './pages/EventHandle';
import LifeCycle from './pages/LifeCycle';
import './App.css';

const store = {
  id: 1,
  name: '1号货仓',
  content: '电子制品'
};

function tellMe(msg) {
  return msg;
}

function App() {
  return (
    <div className="app">
      <img style={{ width: '100px' }} alt="" src={logo} />
      <EventHandle store={store} tellMe={tellMe}/>
      <LifeCycle/>
    </div>
  );
}

export default App;
