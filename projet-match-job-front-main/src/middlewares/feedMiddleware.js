import axios from 'axios';
import {
  LOAD_CARDS,
  saveCards,
  LOAD_CARDS_CANDIDATE,
  saveCardsCandidate,
} from '../actions/feed';

const feedMiddleware = (store) => (next) => (action) => {
  // console.log('action reçue par authMiddleware', action);
  switch (action.type) {
    // Send request to server
    case LOAD_CARDS: {
      axios.get(
        // URL
        'http://laurenthervis-server.eddi.cloud/projet-match-job-back/public/api/v1/jobs',
      )
        .then((response) => {
          console.log(response.data.jobs);
          store.dispatch(saveCards(response.data.jobs));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    default:
  }
  switch (action.type) {
    // Send request to server
    case LOAD_CARDS_CANDIDATE: {
      axios.get(
        // URL
        'http://laurenthervis-server.eddi.cloud/projet-match-job-back/public/api/v1/candidates',
      )
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveCardsCandidate(response.data.candidates));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    default:
  }
  // next action
  next(action);
};

export default feedMiddleware;
