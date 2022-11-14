import axios from 'axios';
import { LOAD_SELECT, saveDataSelect } from '../actions/select';

const selectMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // on envoie la requête au serveur
    case LOAD_SELECT: {
      axios.get(
        // URL
        'http://laurenthervis-server.eddi.cloud/projet-match-job-back/public/api/v1/jobtitles',
      )
        .then((response) => {
          store.dispatch(saveDataSelect('jobtitles', response.data.jobtitles));
        })
        .catch((error) => {
          console.log(error);
        });
      axios.get(
        // URL
        'http://laurenthervis-server.eddi.cloud/projet-match-job-back/public/api/v1/experiences',
      )
        .then((response) => {
          store.dispatch(saveDataSelect('experiences', response.data.experiences));
        })
        .catch((error) => {
          console.log(error);
        });
      axios.get(
        // URL
        'http://laurenthervis-server.eddi.cloud/projet-match-job-back/public/api/v1/contracts',
      )
        .then((response) => {
          // console.log(response.data);
          store.dispatch(saveDataSelect('contracts', response.data.contracts));
        })
        .catch((error) => {
          console.log(error);
        });
      axios.get(
        // URL
        'http://laurenthervis-server.eddi.cloud/projet-match-job-back/public/api/v1/salaries',
      )
        .then((response) => {
          // console.log(response.data.salaries);
          store.dispatch(saveDataSelect('salaries', response.data.salaries));
        })
        .catch((error) => {
          console.log(error);
        });
      axios.get(
        // URL
        'http://laurenthervis-server.eddi.cloud/projet-match-job-back/public/api/v1/technologies',
      )
        .then((response) => {
          // console.log(response.data);
          store.dispatch(saveDataSelect('technologies', response.data.technologies));
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

export default selectMiddleware;
