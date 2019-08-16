import React from "react";

const SmurfCard = ({ smurf }) => {
  return (
    <div key={smurf.id} className="smurf">
      <span>Name: {smurf.name}</span>
      <span>Age: {smurf.age}</span>
      <span>Height: {smurf.height}</span>
      <div className="smurf-btns">
        <button>Delete</button>
        <button>Modify</button>
      </div>
    </div>
  );
};
export default SmurfCard;
