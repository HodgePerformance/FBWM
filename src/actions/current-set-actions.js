import * as types from "./types";

export const fetchCurrentSet = currentSet => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to db
    const firestore = getFirestore();
    console.log(firestore);
    dispatch({ type: types.FETCH_CURRENT_SET, currentSet });
  };
};
