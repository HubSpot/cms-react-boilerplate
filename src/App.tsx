import React from "react";
import reactLogo from './images/logo.svg';
import sprocketLogo from './images/sprocket.svg';
import "./App.css";

export interface AppProps {
  portalId: string;
  moduleData: string;
  moduleInstance?: string;
}

function App(props: AppProps) {
  return (
    <div className="cms-react-boilerplate__container">
      <div className="spinning-logo__container">
        <img className='spinning-logo' src={reactLogo} alt='' />
        <img className='spinning-logo spinning-logo--sprocket' src={sprocketLogo} alt='' />
      </div>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
