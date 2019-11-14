import React from 'react';
// import HomePage from './pages/HomePage';
import { Provider } from './AppContext';
import HocPage from './pages/HocPage';

// function Child(props) {
//   return <div>
//     <h1>Context</h1>
//     <p>{props.user.name}</p>
//   </div>;
// }

const store = {
  user: {
    name: '夏丽林'
  }
}

function App() {
  return (
    <div className="App">
      {/* <Child {...store} /> */}
      <Provider value={store}>
        {/* <Consumer>{ctx => <Child {...ctx} />}</Consumer> */}
        {/* <Consumer>{ctx => <HomePage {...ctx} />}</Consumer> */}
        {/* <HomePage/> */}
        <HocPage />
      </Provider>
    </div>
  );
}

export default App;
