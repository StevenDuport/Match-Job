import { SAVE_DATA_RECRUITER, RECRUITER_DATA_EXIST } from 'src/actions/profileRecruiter';

const initialState = {

  recruiterData: [],
  jobsRecruiterData: [],
  companyName: '',
  lastname: '',
  firstname: '',
  picture: '',
  phoneNumber: '',
  streetNumber: '',
  streetName: '',
  zip: '',
  city: '',
  department: '',
  companyId: '',
};

const reducerProfileRecruiter = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_DATA_RECRUITER: {
      return {
        ...state,
        [action.identifier]: action.data,
      };
    }
    case RECRUITER_DATA_EXIST: {
      return {
        ...state,
        companyName: action.companyName,
        lastname: action.lastname,
        firstname: action.firstname,
        phoneNumber: action.phoneNumber,
        streetNumber: action.streetNumber,
        streetName: action.streetName,
        zip: action.zip,
        city: action.city,
      };
    }
    default:
      return state;
  }
};

export default reducerProfileRecruiter;
