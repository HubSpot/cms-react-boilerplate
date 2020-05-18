import React from 'react';
import './App.scss';
import logo from './images/logo.svg';
import sprocket from './images/sprocket.svg';
import Card from './components/Card';

function App({ moduleData }) {
  // eslint-disable-next-line no-console
  console.log(
    'all of your data typically accessed via {{ module }} in HubL is available as JSON here!',
    moduleData,
  );
  return (
    <div className="cms-react-boilerplate__container">
      <header>
        <div className="logo-container">
          <img src={logo} alt="react logo" />
          <img src={sprocket} alt="sprocket logo" />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Card hydratedClickCount={moduleData.initial_count} />
      </header>
    </div>
  );
}

export default App;
