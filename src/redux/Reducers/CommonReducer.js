import {
  CURRENTDRAWERTAB,
  CURRENTTAB,
  GETNEWS,
  LOADING,
  LOGINSUCCESS,
  SHOWMOREMODAL,
  SIGNUPSUCCESS,
  USER,
} from '../Actions/ActionTypes';

const initialState = {
  showDrawer: false,
  user: {},
  currentTab: 'home',
  currentDrawerTab: 'home',
  loginSuccess: false,
  signUpSuccess: false,
  loading: false,
};

const CommonReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case SHOWMOREMODAL: {
      return {
        ...state,
        showDrawer: action.payload,
      };
    }
    case CURRENTTAB: {
      return {
        ...state,
        currentTab: action.payload,
      };
    }
    case CURRENTDRAWERTAB: {
      return {
        ...state,
        currentDrawerTab: action.payload,
      };
    }
    case LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case LOGINSUCCESS: {
      return {
        ...state,
        loginSuccess: action.payload,
      };
    }
    case SIGNUPSUCCESS: {
      return {
        ...state,
        signUpSuccess: action.payload,
      };
    }
    
     default:
      return state;
  }
};

export default CommonReducer;
