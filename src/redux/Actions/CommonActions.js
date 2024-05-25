import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {
  CURRENTDRAWERTAB,
  CURRENTTAB,
  GETNEWS,
  LOADING,
  LOGIN,
  LOGINSUCCESS,
  SHOWMOREDATINGMODAL,
  SHOWMOREMODAL,
  SIGNUP,
  SIGNUPSUCCESS,
  USER,
} from './ActionTypes';

import {_api_key} from '../../api/api';
// https://newsapi.org/v2/top-headlines/sources?apiKey=API_KEY

export const getAllNews = data => {
  return dispatch => {
    dispatch({type: GETNEWS, payload: data});
  };
};

export const showMoreModal = data => {
  return dispatch => {
    dispatch({type: SHOWMOREMODAL, payload: data});
  };
};

export const saveUserData = data => {
  return dispatch => {
    dispatch({type: USER, payload: data});
  };
};

export const currentTab = data => {
  return dispatch => {
    dispatch({type: CURRENTTAB, payload: data});
  };
};

export const currentDrawerTab = data => {
  return dispatch => {
    dispatch({type: CURRENTDRAWERTAB, payload: data});
  };
};

export const loading = data => {
  return dispatch => {
    dispatch({type: LOADING, payload: data});
  };
};

export const login = async data => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(
      data.email,
      data.password,
    );
    console.log('userCredential',userCredential);
    saveUserData(userCredential);
    return userCredential;
  } catch (error) {
    loading(false);
    alert(error);
    return;
  }
};

export const signUp = async data => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(
      data.email,
      data.password,
    );
    return userCredential;
  } catch (error) {
    alert(error);
    loading(false);
    return;
  }
};
