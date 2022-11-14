import { SAVE_DATA_SELECT } from '../actions/select';

const initialState = {
  jobtitles: [],
  experiences: [],
  contracts: [],
  salaries: [],
  technologies: [],
};

const reducerSelect = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_DATA_SELECT: {
      return {
        ...state,
        [action.identifier]: action.value,
      };
    }
    default:
      return state;
  }
};

export default reducerSelect;
