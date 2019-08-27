import React from "react";
import SmurfCard from "./SmurfCard";

const SmurfList = props => {
  return (
    <div className="smurf-list">
      {props.smurfs.map(smurf => (
        <SmurfCard
          smurf={smurf}
          key={smurf.id}
          deleteSmurf={props.deleteSmurf}
        />
      ))}
    </div>
  );
};

export default SmurfList;
