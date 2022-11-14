/* eslint-disable no-unused-expressions */
import axios from 'axios';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

import {
  SUBMIT_LOGIN,
  saveUserData,
  saveArrayUserData,
  authentificationError,
} from '../actions/user';

const loginMiddleware = (store) => (next) => (action) => {
  const { email, password } = store.getState().user;
  // console.log('action reçue par authMiddleware', action);
  switch (action.type) {
    // on envoie la requête au serveur
    case SUBMIT_LOGIN: {
      axios.post(
        // URL
        'http://laurenthervis-server.eddi.cloud/projet-match-job-back/public/api/v1/login',
        // données
        {
          email: email,
          password: password,
        },
      )
        .then((response) => {
          const decoded = jwt_decode(response.data.token);
          store.dispatch(saveUserData('token', response.data.token));
          store.dispatch(saveArrayUserData('roles', decoded.roles[0]));
        })
        .catch((error) => {
          error.response.status === 401 && store.dispatch(authentificationError());
        });
      break;
    }
    default:
  }
  // on transmet l'action au suivant
  next(action);
};

export default loginMiddleware;
