import axios from 'axios';
import { loadProfileCandidate } from '../actions/profileCandidate';

import { GET_USER, saveUserData } from '../actions/user';

const userMiddleware = (store) => (next) => (action) => {
  const { token } = store.getState().user;
  // console.log('action reçue par authMiddleware', action);
  switch (action.type) {
    case GET_USER: {
      // on envoie la requête au serveur
      axios.get(
        // URL
        'http://laurenthervis-server.eddi.cloud/projet-match-job-back/public/api/v1/getuser',
        // données
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then((response) => {
          // console.log(response);
          store.dispatch(saveUserData('id', response.data.id));
          store.dispatch(saveUserData('email', response.data.email));
          store.dispatch(saveUserData('candidateId', response.data.candidates[0].id));
          store.dispatch(loadProfileCandidate());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    default:
  }
  // on transmet l'action au suivant
  next(action);
};

export default userMiddleware;
