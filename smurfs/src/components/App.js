import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "../actions";

import FormikSmurfForm from "./SmurfForm";

import "./App.css";
const App = props => {
  useEffect(() => {
    props.getData();
  }, []);

  const statusUpdate = status => {
    if (status) {
      setUsers([...users, status]);
    }
  };

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <FormikSmurfForm />
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
  { getData }
)(App);
