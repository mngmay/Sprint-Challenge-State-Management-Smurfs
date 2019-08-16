import {
  FETCH_SMURFS_DATA_START,
  FETCH_SMURFS_DATA_SUCCESS,
  FETCH_SMURFS_DATA_FAILURE,
  ADD_SMURF
} from "../actions";

const initialState = {
  smurfs: [{ name: "", age: "", height: "", id: "" }],
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
    case ADD_SMURF:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload]
      };
    default:
      return state;
  }
};
