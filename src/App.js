
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import React from "react";
import PlayersList from "./PlayersList";

function App() {
  return (
    <div className="App" style={{alignItems: "center", justifyContent: "center", justifyItems: "center"}}>
     
      <PlayersList />
     
    </div>
  );
}

export default App;
