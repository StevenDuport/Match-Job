import { CHANGE_INPUT_VALUE_JOB, CLEAN_INPUT_JOB, SAVE_ID_JOB, SAVE_JOB_PROFILE } from '../actions/job';

const initialState = {
  experience: '',
  contract: '',
  salary: '',
  jobtitle: '',
  description: '',
  techno1: '',
  techno2: '',
  techno3: '',
  techno4: '',
  techno5: '',
  jobId: '',

};

const reducerJob = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE_JOB: {
      return {
        ...state,
        [action.identifier]: action.value,
      };
    }
    case SAVE_ID_JOB: {
      return {
        ...state,
        jobId: action.jobId,
      };
    }
    case SAVE_JOB_PROFILE: {
      return {
        ...state,
        experience: action.experience,
        contract: action.contract,
        salary: action.salary,
        jobtitle: action.jobtitle,
        description: action.description,
        techno1: action.techno1,
        techno2: action.techno2,
        techno3: action.techno3,
        techno4: action.techno4,
        techno5: action.techno5,
      };
    }
    case CLEAN_INPUT_JOB: {
      return {
        ...state,
        experience: action.experience,
        contract: action.contract,
        salary: action.salary,
        jobtitle: action.jobtitle,
        description: action.description,
        techno1: action.techno1,
        techno2: action.techno2,
        techno3: action.techno3,
        techno4: action.techno4,
        techno5: action.techno5,
        jobId: action.jobId,
      };
    }
    default:
      return state;
  }
};

export default reducerJob;
