import React from 'react';
import { Provider } from './AppContext';
// import HomePage from './pages/HomePage';
// import HocPage from './pages/HocPage';
// import Decorators from './pages/Decorators';
import UserPage from './pages/UserPage';

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
        {/* <HocPage /> */}
        {/* <Decorators/> */}
        <UserPage/>
      </Provider>
    </div>
  );
}

export default App;
