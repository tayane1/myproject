import React from "react";

const Player = ({ name, team, nationality, jerseyNumber, age, imageURL }) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "10px", marginLeft: "5rem", marginTop: "50px" }}>
        <center>
      <img className="card-img-top" src={imageURL} alt={name} style={{width: "287px"}} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Equipe: {team}<br/>
          Nationalité: {nationality}<br/>
          Numero de maillot: {jerseyNumber}<br/>
          Age: {age}
        </p>
      </div>
      </center>
    </div>
  );
};

export default Player;