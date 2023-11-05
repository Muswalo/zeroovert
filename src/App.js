import React from "react";
import Nav from "./components/Header/Nav";
import Main from "./components/Main/Main";
import './assets/styles/App.css';


function App() {
  return (
    <div className="body">
      <Nav />
      <Main />
    </div>
  );
}

export default App;
