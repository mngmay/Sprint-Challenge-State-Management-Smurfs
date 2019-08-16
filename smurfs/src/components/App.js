import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { getData, addSmurf } from "../actions";

import FormikSmurfForm from "./SmurfForm";

import "./App.css";
const App = props => {
  useEffect(() => {
    props.getData();
  }, []);

  const addNewSmurf = smurf => {
    props.addSmurf(smurf);
  };

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <FormikSmurfForm addNewSmurf={addNewSmurf} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    name: state.name,
    age: state.age,
    height: state.height,
    id: state.id
  };
};

export default connect(
  mapStateToProps,
  { getData, addSmurf }
)(App);
