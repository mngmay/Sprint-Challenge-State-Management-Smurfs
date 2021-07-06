import {
  FETCH_SMURFS_DATA_START,
  FETCH_SMURFS_DATA_SUCCESS,
  FETCH_SMURFS_DATA_FAILURE,
  ADD_SMURF_START,
  ADD_SMURFS_DATA_SUCCESS,
  ADD_SMURFS_DATA_FAILURE,
  UPDATE_SMURF,
  UPDATE_SMURF_SUCCESS,
  UPDATE_SMURF_FAILURE,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE,
  DELETE_SMURF
} from "../actions";

const initialState = {
  smurfs: [],
  isLoading: false,
  error: ""
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_SMURFS_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
        error: ""
      };
    case FETCH_SMURFS_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case ADD_SMURF_START:
      console.log("smurf added");
      return {
        ...state,
        smurfs: [...state.smurfs],
        isLoading: true,
        error: ""
      };
    case ADD_SMURFS_DATA_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        isLoading: false,
        error: ""
      };
    case ADD_SMURFS_DATA_FAILURE:
      return {
        ...state,
        smurfs: [...state.smurfs],
        isLoading: false,
        error: action.payload
      };
    case UPDATE_SMURF:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case UPDATE_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        smurfs: [...action.payload]
      };
    case UPDATE_SMURF_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case DELETE_SMURF:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: [...action.payload],
        error: ""
      };
    case DELETE_SMURF_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
