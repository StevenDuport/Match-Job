import {
  SAVE_CARDS,
  SAVE_CARDS_CANDIDATE,
  SWIPE,
  TOGGLE_BOARD,
} from '../actions/feed';
import { SAVE_ID_TO_LIKE } from '../actions/match';

const initialState = {
  toggleFeedNav: false,
  cards: [],
  isIdSwipe: '',
  isSwipeInterrested: false,
  jobIdLiked: '',
  candidateIdLiked: '',
};

const reducerFeed = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_BOARD: {
      return {
        ...state,
        toggleFeedNav: !state.toggleFeedNav,
      };
    }
    case SAVE_CARDS: {
      return {
        ...state,
        cards: action.data,
      };
    }
    case SWIPE: {
      return {
        ...state,
        isIdSwipe: action.jobId,
        cards: state.cards.filter((i) => i !== state.cards.length - 1),
      };
    }
    case SAVE_CARDS_CANDIDATE: {
      return {
        ...state,
        cards: action.data,
      };
    }
    case SAVE_ID_TO_LIKE: {
      return {
        ...state,
        jobIdLiked: action.job,
        candidateIdLiked: action.candidate,
      };
    }
    default:
      return state;
  }
};

export default reducerFeed;
