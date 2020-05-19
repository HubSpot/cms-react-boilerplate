import React from 'react';
import './App.scss';
import LogoContainer from './components/LogoContainer';
import Card from './components/Card';

function App({ moduleData }) {
  // eslint-disable-next-line no-console
  console.log(
    'all of your data typically accessed via the "module" keyword in HubL is available as JSON here!',
    moduleData,
  );
  return (
    <div className="cms-react-boilerplate__container">
      <header>
        <LogoContainer />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Card initialClickCount={moduleData.initial_count} />
      </header>
    </div>
  );
}

export default App;
