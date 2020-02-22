import firebase from '../firebase';
import * as types from './types';

export const fetchCurrentSet = () => async dispatch => {
    console.log(firebase.firestore.collection("current_set").get());
};