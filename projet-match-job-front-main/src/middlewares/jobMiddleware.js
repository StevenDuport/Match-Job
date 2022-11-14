import axios from 'axios';
import { cleanInputJob, SUBMIT_JOB_POST, SUBMIT_JOB_PUT } from '../actions/job';
import { loadJobsRecruiter, loadProfileRecruiter } from '../actions/profileRecruiter';
import { navigateOn } from '../actions/user';

const jobMiddleware = (store) => (next) => (action) => {
  const { description } = store.getState().job;
  const idRecruiter = Number(store.getState().user.recruiterId);
  const jobtitle = Number(store.getState().job.jobtitle);
  const contract = Number(store.getState().job.contract);
  const experience = Number(store.getState().job.experience);
  const salary = Number(store.getState().job.salary);
  const techno1 = Number(store.getState().job.techno1);
  const techno2 = Number(store.getState().job.techno2) === '' ? '' : Number(store.getState().job.techno2);
  const techno3 = Number(store.getState().job.techno3) === '' ? '' : Number(store.getState().job.techno3);
  const techno4 = Number(store.getState().job.techno4) === '' ? '' : Number(store.getState().job.techno4);
  const techno5 = Number(store.getState().job.techno5) === '' ? '' : Number(store.getState().job.techno5);
  const jobId = Number(store.getState().job.jobId);
  // console.log('action reçue par authMiddleware', action);
  switch (action.type) {
    case SUBMIT_JOB_POST: {
      // on envoie la requête au serveur
      axios.post(
        // URL
        'http://laurenthervis-server.eddi.cloud/projet-match-job-back/public/api/v1/jobs',
        // données
        {
          recruiter: idRecruiter,
          contract: contract,
          description: description,
          experience: experience,
          salary: salary,
          jobtitle: jobtitle,
          jobName: 'job',
          technologies: [techno1, techno2, techno3, techno4, techno5],
          status: 1,
        },
      )
        .then((response) => {
          // console.log(response);
          store.dispatch(loadJobsRecruiter());
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

  switch (action.type) {
    case SUBMIT_JOB_PUT: {
      // on envoie la requête au serveur
      axios.put(
        // URL
        `http://laurenthervis-server.eddi.cloud/projet-match-job-back/public/api/v1/jobs/${jobId}`,
        // données
        {
          contract: contract,
          description: description,
          experience: experience,
          salary: salary,
          jobtitle: jobtitle,
          jobName: 'job',
          technologies: [techno1, techno2, techno3, techno4, techno5],
          status: 1,
        },
      )
        .then((response) => {
          // console.log(response);
          store.dispatch(loadJobsRecruiter());
          store.dispatch(loadProfileRecruiter());
          store.dispatch(navigateOn());
          store.dispatch(cleanInputJob());
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

export default jobMiddleware;
