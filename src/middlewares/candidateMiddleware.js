/* eslint-disable camelcase */
import axios from 'axios';
import {
  SUBMIT_PROFILE_POST,
  LOAD_PROFILE_CANDIDATE,
  saveLoadCandidate,
  SUBMIT_PROFILE_PUT,
  candidateDataExist,
  loadProfileCandidate,
} from '../actions/profileCandidate';
import { navigateOn, saveUserData } from '../actions/user';

const candidateMiddleware = (store) => (next) => (action) => {
  // data from state profileCandidate

  // string data
  const {
    lastname,
    firstname,
    birthday,
    phone_number,
    description,
    github,
    portfolio,
    picture,
  } = store.getState().profileCandidate;

  // Number data
  const { streetName, city } = store.getState().profileCandidate.adress;
  const experienceId = Number(store.getState().profileCandidate.experience_id);
  const genreId = Number(store.getState().profileCandidate.genre);
  const contractId = Number(store.getState().profileCandidate.contract_id);
  const salaryId = Number(store.getState().profileCandidate.salary_id);
  const techno1 = Number(store.getState().profileCandidate.techno1);
  const techno2 = Number(store.getState().profileCandidate.techno2);
  const techno3 = Number(store.getState().profileCandidate.techno3);
  const techno4 = Number(store.getState().profileCandidate.techno4);
  const techno5 = Number(store.getState().profileCandidate.techno5);
  const streetNumber = Number(store.getState().profileCandidate.adress.streetNumber);
  const { zip } = store.getState().profileCandidate.adress;
  const jobtitle = Number(store.getState().profileCandidate.jobtitle);
  const id = Number(store.getState().user.id);
  const candidateId = Number(store.getState().user.candidateId);

  // console.log('action reçue par authMiddleware', action);
  switch (action.type) {
    case SUBMIT_PROFILE_POST: {
    // on envoie la requête au serveur
      axios.post(
        // URL
        'http://laurenthervis-server.eddi.cloud/projet-match-job-back/public/api/v1/candidates',
        // Option
        // données
        {
          user: id,
          picture: picture,
          lastname: lastname,
          firstname: firstname,
          birthday: birthday,
          genre: genreId,
          jobtitle: jobtitle,
          phoneNumber: phone_number,
          adress: {
            streetNumber: streetNumber,
            streetName: streetName,
            zip: zip,
            city: city,
          },
          description: description,
          experience: experienceId,
          contract: contractId,
          salary: salaryId,
          resum: github,
          portfolio: portfolio,
          technologies: [techno1, techno2, techno3, techno4, techno5],
        },
      )
        .then((response) => {
          // console.log(response);
          // On veut modifier le state suite a la réponse
          store.dispatch(saveUserData('candidateId', response.data.id));
          store.dispatch(loadProfileCandidate());
          store.dispatch(navigateOn());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }

    case LOAD_PROFILE_CANDIDATE: {
      axios.get(
        // URL
        `http://laurenthervis-server.eddi.cloud/projet-match-job-back/public/api/v1/candidates/${candidateId}`,
      )
        .then((response) => {
          // console.log(response.data);
          store.dispatch(saveLoadCandidate(response.data));
          store.dispatch(candidateDataExist(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }

    case SUBMIT_PROFILE_PUT: {
      axios.put(
        // URL
        `http://laurenthervis-server.eddi.cloud/projet-match-job-back/public/api/v1/candidates/${candidateId}`,

        {
          picture: picture,
          lastname: lastname,
          firstname: firstname,
          birthday: birthday,
          genre: genreId,
          jobtitle: jobtitle,
          phoneNumber: phone_number,
          adress: {
            streetNumber: streetNumber,
            streetName: streetName,
            zip: zip,
            city: city,
          },
          description: description,
          experience: experienceId,
          contract: contractId,
          salary: salaryId,
          resume: github,
          portfolio: portfolio,
          technologies: [techno1, techno2, techno3, techno4, techno5],
        },
      )
        .then((response) => {
          // console.log(response);
          store.dispatch(loadProfileCandidate());
          store.dispatch(navigateOn());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    default:
      // on transmet l'action au suivant
      next(action);
  }
};
export default candidateMiddleware;
