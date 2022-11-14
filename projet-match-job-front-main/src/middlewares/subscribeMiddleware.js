import axios from 'axios';

import { insertSubscribeSucces, SUBMIT_SUBSCRIBE } from '../actions/user';

const subscribeMiddleware = (store) => (next) => (action) => {
  const { email, password, roles } = store.getState().user;
  // console.log('action reçue par authMiddleware', action);
  if (action.type === SUBMIT_SUBSCRIBE) {
    // on envoie la requête au serveur
    axios.post(
      // URL
      'http://laurenthervis-server.eddi.cloud/projet-match-job-back/public/api/v1/subscribe',
      // données
      {
        // dans un middleware, pour lire une info du state, on appelle
        // store.getState(), ça nous retourne un objet, on choisit dedans ce
        // qu'on veut récupérer
        email: email,
        password: password,
        roles: roles,
      },
    )
      .then((response) => {
        // console.log(response);
        store.dispatch(insertSubscribeSucces());
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // on transmet l'action au suivant
  next(action);
};

export default subscribeMiddleware;
