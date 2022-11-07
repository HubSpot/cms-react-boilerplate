import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "core-js/stable";
import "regenerator-runtime/runtime";

const targetModulesData = document.querySelectorAll<any>(
  '.cms-react-boilerplate > script[type="application/json"]'
);

targetModulesData.forEach(({ dataset, textContent }) => {
const rootElement = document.getElementById(`App--${dataset.moduleInstance}`);
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

  root.render(
    <App
      portalId={dataset.portalId}
      moduleData={JSON.parse(textContent)}
      moduleInstance={dataset.moduleInstance}
    />
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
