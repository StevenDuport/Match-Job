// Actions Types:
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const SUBMIT_SUBSCRIBE = 'SUBMIT_SUBSCRIBE';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const SAVE_ARRAY_USER_DATA = 'SAVE_ARRAY_USER_DATA';
export const GET_USER = 'GET_USER';
export const INSERT_SUBSCRIBE_SUCCES = 'INSERT_SUBSCRIBE_SUCCES';
export const GET_USER_RECRUITER = 'GET_USER_RECRUITER';
export const NAVIGATE_ON = 'NAVIGATE_ON';
export const NAVIGATE_OFF = 'NAVIGATE_OFF';
export const AUTHENTIFICATION_ERROR = 'AUTHENTIFICATION_ERROR';
export const IS_POPUP = 'IS_POPUP';
// Actions Creators:

export const changeInputValue = (newValue, identifier) => (
  {
    type: CHANGE_INPUT_VALUE,
    value: newValue,
    identifier: identifier,
  }
);

export const submitSubscribe = () => (
  {
    type: SUBMIT_SUBSCRIBE,
  }
);

export const submitLogin = () => (
  {
    type: SUBMIT_LOGIN,
  }
);

export const saveUserData = (identifier, value) => (
  {
    type: SAVE_USER_DATA,
    value: value,
    identifier: identifier,
  }
);

export const saveArrayUserData = (identifier, value) => (
  {
    type: SAVE_ARRAY_USER_DATA,
    value: value,
    identifier: identifier,
  }
);

export const getUser = () => (
  {
    type: GET_USER,
  }
);

export const insertSubscribeSucces = () => (
  {
    type: INSERT_SUBSCRIBE_SUCCES,
  }
);

export const getUserRecruiter = () => (
  {
    type: GET_USER_RECRUITER,
  }
);

export const navigateOn = () => (
  {
    type: NAVIGATE_ON,
  }
);

export const navigateOff = () => (
  {
    type: NAVIGATE_OFF,
  }
);

export const authentificationError = () => (
  {
    type: AUTHENTIFICATION_ERROR,
  }
);

export const isPopup = () => (
  {
    type: IS_POPUP,
  }
);
