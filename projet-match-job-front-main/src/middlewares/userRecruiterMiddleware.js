import axios from 'axios';

import { GET_USER_RECRUITER, saveUserData } from '../actions/user';
import { loadJobsRecruiter, loadProfileRecruiter } from '../actions/profileRecruiter';

const userRecruiterMiddleware = (store) => (next) => (action) => {
  const { token } = store.getState().user;
  // console.log('action reçue par authMiddleware', action);
  switch (action.type) {
    case GET_USER_RECRUITER: {
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
          store.dispatch(saveUserData('recruiterId', response.data.recruiters[0].id));
          store.dispatch(loadProfileRecruiter());
          store.dispatch(loadJobsRecruiter());
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

export default userRecruiterMiddleware;
