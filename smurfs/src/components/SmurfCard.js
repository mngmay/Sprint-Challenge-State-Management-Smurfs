import React, { useState } from "react";
import { checkPropTypes } from "prop-types";

const SmurfCard = ({ smurf, updateSmurf }) => {
  const [edit, setEdit] = useState(false);
  const [smurfToEdit, setSmurfToEdit] = useState(smurf);

  const toggleEdit = () => {
    setEdit(!edit);
  };

  const editHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    setSmurfToEdit({ ...smurf, [name]: value });
  };

  return (
    <div className="smurf">
      <span>Name: {smurf.name}</span>
      <span>Age: {smurf.age}</span>
      <span>Height: {smurf.height}</span>
      <div className="smurf-btns">
        <button>Delete</button>
        <button onClick={toggleEdit}>Edit</button>
      </div>

      {edit && (
        <form
          onSubmit={e => {
            e.preventDefault();
            updateSmurf(smurf);
            toggleEdit();
          }}
        >
          <input
            type="text"
            name="name"
            value={smurf.name}
            onChange={e => editHandler(e)}
            placeholder="Name"
          />
          <input
            type="number"
            name="age"
            value={smurf.age}
            onChange={e => editHandler(e)}
            placeholder="Age"
          />
          <input
            type="text"
            name="height"
            value={smurf.height}
            onChange={e => editHandler(e)}
            placeholder="Height"
          />
        </form>
      )}
    </div>
  );
};
export default SmurfCard;
