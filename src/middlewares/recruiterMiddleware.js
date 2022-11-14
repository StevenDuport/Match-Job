import axios from 'axios';
import {
  SUBMIT_PROFILE_RECRUITER_POST,
  LOAD_PROFILE_RECRUITER,
  LOAD_JOBS_RECRUITER,
  saveDataRecruiter,
  SUBMIT_PROFILE_RECRUITER_PUT,
  loadProfileRecruiter,
  recruiterDataExist,
} from '../actions/profileRecruiter';
import { navigateOn, saveUserData } from '../actions/user';

const recruiterMiddleware = (store) => (next) => (action) => {
  const userId = Number(store.getState().user.id);
  const {
    companyName,
    lastname,
    firstname,
    phoneNumber,
    streetName,
    city,
    zip,
  } = store.getState().profileRecruiter;
  const streetNumber = Number(store.getState().profileRecruiter.streetNumber);
  const recruiterId = Number(store.getState().user.recruiterId);
  const companyId = Number(store.getState().profileRecruiter.companyId);

  // console.log(recruiterId);
  switch (action.type) {
    case SUBMIT_PROFILE_RECRUITER_POST: {
      // on envoie la requête au serveur
      axios.post(
        // URL
        'http://laurenthervis-server.eddi.cloud/projet-match-job-back/public/api/v1/recruiters',
        // Option
        // données
        {
          user: userId,
          company: {
            adress: {
              streetNumber: streetNumber,
              streetName: streetName,
              city: city,
              zip: zip,
            },
            companyName: companyName,
            sector: 1,
          },
          firstName: firstname,
          lastName: lastname,
          phoneNumber: phoneNumber,
        },
      )
        .then((response) => {
          // console.log(response);
          store.dispatch(saveUserData('recruiterId', response.data.id));
          store.dispatch(loadProfileRecruiter());
          store.dispatch(navigateOn());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    // on envoie la requête au serveur
    case LOAD_PROFILE_RECRUITER: {
      axios.get(
        // URL
        `http://laurenthervis-server.eddi.cloud/projet-match-job-back/public/api/v1/recruiters/${recruiterId}`,
      )
        .then((response) => {
          // console.log(response.data);
          store.dispatch(saveDataRecruiter('recruiterData', response.data));
          store.dispatch(saveDataRecruiter('companyId', response.data.company.id));
          store.dispatch(recruiterDataExist(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    case LOAD_JOBS_RECRUITER: {
      axios.get(
        // URL
        `http://laurenthervis-server.eddi.cloud/projet-match-job-back/public/api/v1/jobs/recruiters/${recruiterId}`,
      )
        .then((response) => {
          // console.log(response.data);
          store.dispatch(saveDataRecruiter('jobsRecruiterData', response.data.jobs));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    case SUBMIT_PROFILE_RECRUITER_PUT: {
      // on envoie la requête au serveur
      axios.put(
        // URL
        `http://laurenthervis-server.eddi.cloud/projet-match-job-back/public/api/v1/recruiters/${recruiterId}`,
        // Option
        {
          company: {
            adress: {
              streetNumber: streetNumber,
              streetName: streetName,
              city: city,
              zip: zip,
            },
            companyName: companyName,
            sector: 1,
            id: companyId,
          },
          firstName: firstname,
          lastName: lastname,
          phoneNumber: phoneNumber,
        },
      )
        .then((response) => {
          // console.log(response);
          store.dispatch(loadProfileRecruiter());
          store.dispatch(navigateOn());
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

export default recruiterMiddleware;
