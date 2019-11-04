import React, { useState, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import lodable from '@loadable/component';

const SplitMe = lodable(() => import('./SplitMe'), {
  fallback: <div>loading...</div>
});

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>
          Hi
        </p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
}

export default App;
