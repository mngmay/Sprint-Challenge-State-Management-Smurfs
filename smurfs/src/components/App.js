import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData, addSmurf, updateSmurf, deleteSmurf } from "../actions";

import FormikSmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";

import "./App.css";
const App = props => {
  useEffect(() => {
    props.getData();
  }, []);

  const addNewSmurf = smurf => {
    props.addSmurf(smurf);
  };

  const updateSmurf = smurf => {
    props.updateSmurf(smurf);
  };

  const deleteSmurf = smurf => {
    props.deleteSmurf(smurf);
  };

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      {props.isLoading && "Loading Up Smurfs"}
      <FormikSmurfForm addNewSmurf={addNewSmurf} />
      <SmurfList
        smurfs={props.smurfs}
        updateSmurf={updateSmurf}
        deleteSmurf={deleteSmurf}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state,
    smurfs: state.smurfs,
    isLoading: state.isLoading
  };
};

export default connect(
  mapStateToProps,
  { getData, addSmurf, updateSmurf, deleteSmurf }
)(App);
