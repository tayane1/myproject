import React from "react";
import Player from "./Players";
import players from "./player";

const PlayersList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;