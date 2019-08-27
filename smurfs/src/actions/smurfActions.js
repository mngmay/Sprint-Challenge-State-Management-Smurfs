import axios from "axios";

export const FETCH_SMURFS_DATA_START = "FETCH_SMURFS_DATA_START";
export const FETCH_SMURFS_DATA_SUCCESS = "FETCH_SMURFS_DATA_SUCCESS";
export const FETCH_SMURFS_DATA_FAILURE = "FETCH_SMURFS_DATA_FAILURE";
export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURFS_DATA_FAILURE = "ADD_SMURFS_DATA_FAILURE";
export const ADD_SMURFS_DATA_SUCCESS = "ADD_SMURFS_DATA_SUCCESS";
export const UPDATE_SMURF = "UPDATE_SMURF";
export const UPDATE_SMURF_SUCCESS = "UPDATE_SMURF_SUCCESS";
export const UPDATE_SMURF_FAILURE = "UPDATE_SMURF_FAILURE";
export const DELETE_SMURF = "DELETE_SMURF";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_SMURFS_DATA_START });
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res.data);
        dispatch({ type: FETCH_SMURFS_DATA_SUCCESS, payload: res.data });
      })
      .catch(err =>
        dispatch({ type: FETCH_SMURFS_DATA_FAILURE, payload: err.response })
      );
  };
};

export const addSmurf = smurf => {
  return dispatch => {
    dispatch({ type: ADD_SMURF_START });
    axios
      .post(`http://localhost:3333/smurfs`, smurf)
      .then(res => {
        console.log(res.data);
        dispatch({ type: ADD_SMURFS_DATA_SUCCESS, payload: smurf });
      })
      .catch(err =>
        dispatch({ type: ADD_SMURFS_DATA_FAILURE, payload: err.response })
      );
  };
};

export const updateSmurf = smurf => {
  return dispatch => {
    dispatch({ type: UPDATE_SMURF });
    axios
      .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
      .then(res => dispatch({ type: UPDATE_SMURF_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: UPDATE_SMURF_FAILURE, payload: err }));
  };
};

export const deleteSmurf = smurf => {
  return dispatch => {
    dispatch({ type: DELETE_SMURF });
    axios
      .delete(`http://localhost:3333/smurfs/${smurf.id}`)
      .then(res => dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: DELETE_SMURF_FAILURE, payload: err }));
  };
};
