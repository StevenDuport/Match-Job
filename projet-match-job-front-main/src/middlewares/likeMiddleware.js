import axios from 'axios';
import { SEND_LIKE_CANDIDATE, SEND_LIKE_RECRUITER } from '../actions/match';

const likeMiddleware = (store) => (next) => (action) => {
  const candidateIdLiked = Number(store.getState().feed.candidateIdLiked);
  const jobIdLiked = Number(store.getState().feed.jobIdLiked);
  // console.log(candidateIdLiked);

  // console.log('action reçue par authMiddleware', action);
  switch (action.type) {
    case SEND_LIKE_RECRUITER: {
    // on envoie la requête au serveur
      axios.put(
        // URL
        'http://laurenthervis-server.eddi.cloud/projet-match-job-back/public/api/v1/jobs/recruiter-interrested',
        // données
        {
          job: {
            id: jobIdLiked,
          },
          candidate: {
            id: candidateIdLiked,
          },
        },
      )
        .then((response) => {
          console.log(response);
          // On veut modifier le state suite a la réponse
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }

    case SEND_LIKE_CANDIDATE: {
      axios.put(
        // URL
        'http://laurenthervis-server.eddi.cloud/projet-match-job-back/public/api/v1/jobs/candidate-interrested',
        // données
        {
          job: {
            id: jobIdLiked,
          },
          candidate: {
            id: candidateIdLiked,
          },
        },
      )
        .then((response) => {
          console.log(response);
          // On veut modifier le state suite a la réponse
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

export default likeMiddleware;
