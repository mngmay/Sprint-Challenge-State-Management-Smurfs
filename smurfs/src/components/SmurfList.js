import React from "react";
import SmurfCard from "./SmurfCard";

const SmurfList = props => {
  console.log(props);
  return (
    <div className="smurf-list">
      {props.smurfs.map(smurf => (
        <SmurfCard smurf={smurf} key={smurf.id} />
      ))}
    </div>
  );
};

export default SmurfList;
