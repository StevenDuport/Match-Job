import { IS_NOT_MATCH, MATCH_ON } from '../actions/match';
import {
  CHANGE_INPUT_VALUE,
  SUBMIT_LOGIN,
  SUBMIT_SUBSCRIBE,
  SAVE_USER_DATA,
  SAVE_ARRAY_USER_DATA,
  INSERT_SUBSCRIBE_SUCCES,
  NAVIGATE_OFF,
  NAVIGATE_ON,
  AUTHENTIFICATION_ERROR,
  IS_POPUP,
} from '../actions/user';

const initialState = {
  email: '',
  password: '',
  newPassword: '',
  roles: [],
  id: '',
  candidateId: '',
  recruiterId: '',
  token: '',
  isLogged: false,
  usercreate: false,
  isSave: false,
  isAuthError: false,
  isMatch: false,
  isPopup: true,
};

const reducerUser = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.identifier]: action.value,
      };
    case SUBMIT_SUBSCRIBE:
      return {
        ...state,
        email: '',
        password: '',
        roles: [],
      };
    case SUBMIT_LOGIN:
      return {
        ...state,
        email: '',
        password: '',
        userCreate: false,
      };
    case SAVE_USER_DATA:
      return {
        ...state,
        [action.identifier]: action.value,
        isLogged: true,
      };
    case SAVE_ARRAY_USER_DATA:
      return {
        ...state,
        [action.identifier]: [action.value],
      };
    case INSERT_SUBSCRIBE_SUCCES:
      return {
        ...state,
        userCreated: true,
      };
    case NAVIGATE_OFF:
      return {
        ...state,
        isSave: false,
      };
    case NAVIGATE_ON:
      return {
        ...state,
        isSave: true,
      };
    case AUTHENTIFICATION_ERROR:
      return {
        ...state,
        isAuthError: true,
      };
    case MATCH_ON:
      return {
        ...state,
        isMatch: true,
      };
    case IS_NOT_MATCH:
      return {
        ...state,
        isMatch: false,
      };
    case IS_POPUP:
      return {
        ...state,
        isPopup: false,
      };
    default:
      return state;
  }
};

export default reducerUser;
