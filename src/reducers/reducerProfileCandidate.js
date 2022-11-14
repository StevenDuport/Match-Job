import {
  CHANGE_ADRESS_CANDIDATE,
  CHANGE_INPUT_VALUE_CANDIDATE,
  CHANGE_SELECT_CANDIDATE,
  CHANGE_TECHNO_CANDIDATE,
  SAVE_LOAD_CANDIDATE,
  CANDIDATE_DATA_EXIST,
} from '../actions/profileCandidate';

const initialState = {

  candidateData: {},
  lastname: '',
  firstname: '',
  picture: '',
  birthday: '',
  genre: '',
  phone_number: '',
  adress: {
    streetNumber: '',
    streetName: '',
    zip: '',
    city: '',
    department: '',
  },
  description: '',
  position_held: '',
  jobtitle: '',
  experience_id: '',
  contract_id: '',
  salary_id: '',
  github: '',
  portfolio: '',
  techno1: '',
  techno2: '',
  techno3: '',
  techno4: '',
  techno5: '',
  formRef: '',
};

const reducerProfileCandidate = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE_CANDIDATE: {
      return {
        ...state,
        [action.identifier]: action.value,
      };
    }
    case CHANGE_ADRESS_CANDIDATE: {
      return {
        ...state,
        adress: { ...state.adress, [action.identifier]: action.value },
      };
    }
    case CHANGE_TECHNO_CANDIDATE: {
      return {
        ...state,
        [action.identifier]: action.value,
      };
    }
    case CHANGE_SELECT_CANDIDATE: {
      return {
        ...state,
        [action.identifier]: action.value,
      };
    }
    case SAVE_LOAD_CANDIDATE: {
      return {
        ...state,
        candidateData: action.value,
      };
    }
    case CANDIDATE_DATA_EXIST: {
      return {
        ...state,
        lastname: action.lastname,
        firstname: action.firstname,
        picture: action.picture,
        birthday: action.birthday,
        genre: action.genre,
        phone_number: action.phone_number,
        adress: {
          streetNumber: action.streetNumber,
          streetName: action.streetName,
          zip: action.zip,
          city: action.city,
        },
        description: action.description,
        jobtitle: action.jobtitle,
        experience_id: action.experience_id,
        contract_id: action.contract_id,
        salary_id: action.salary_id,
        github: action.github,
        portfolio: action.portfolio,
        techno1: action.techno1,
        techno2: action.techno2,
        techno3: action.techno3,
        techno4: action.techno4,
        techno5: action.techno5,
      };
    }
    default:
      return state;
  }
};

export default reducerProfileCandidate;
