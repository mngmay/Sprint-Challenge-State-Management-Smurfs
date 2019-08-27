import React, { useState } from "react";

const SmurfCard = ({ smurf, updateSmurf, deleteSmurf }) => {
  const [edit, setEdit] = useState(false);
  const [smurfToEdit, setSmurfToEdit] = useState(smurf);

  const toggleEdit = () => {
    setEdit(!edit);
  };

  const editHandler = e => {
    setSmurfToEdit({ [e.target.name]: e.target.value });
  };

  return (
    <div className="smurf">
      <span>Name: {smurf.name}</span>
      <span>Age: {smurf.age}</span>
      <span>Height: {smurf.height}</span>
      <div className="smurf-btns">
        <button onClick={e => deleteSmurf(smurf)}>Delete</button>
        <button onClick={toggleEdit}>Edit</button>
      </div>

      {edit && (
        <form
          onSubmit={e => {
            e.preventDefault();
            updateSmurf(smurf);
            toggleEdit();
          }}
          className="edit-form"
        >
          <input
            type="text"
            name="name"
            value={smurf.name}
            onChange={editHandler}
            placeholder="Name"
          />
          <input
            type="number"
            name="age"
            value={smurf.age}
            onChange={editHandler}
            placeholder="Age"
          />
          <input
            type="text"
            name="height"
            value={smurf.height}
            onChange={editHandler}
            placeholder="Height"
          />
        </form>
      )}
    </div>
  );
};
export default SmurfCard;
