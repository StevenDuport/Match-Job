import { legacy_createStore as createStore, applyMiddleware } from 'redux';

// import { devToolsEnhancer } from 'redux-devtools-extension';
import { composeWithDevTools } from 'redux-devtools-extension';

// Import Reducer
import rootReducer from '../reducers';
// Import Middleware
import loginMiddleware from '../middlewares/loginMiddleware';
import subscribeMiddleware from '../middlewares/subscribeMiddleware';
import selectMiddleware from '../middlewares/selectMiddleware';
import candidateMiddleware from '../middlewares/candidateMiddleware';
import feedMiddleware from '../middlewares/feedMiddleware';
import likeMiddleware from '../middlewares/likeMiddleware';
import userMiddleware from '../middlewares/userMiddleware';
import recruiterMiddleware from '../middlewares/recruiterMiddleware';
import userRecruiterMiddleware from '../middlewares/userRecruiterMiddleware';
import jobMiddleware from '../middlewares/jobMiddleware';

// On construit un enhancer avec à la fois les dev tools et middleware
const middlewares = applyMiddleware(
  // authMiddleware,
  subscribeMiddleware,
  loginMiddleware,
  selectMiddleware,
  candidateMiddleware,
  feedMiddleware,
  likeMiddleware,
  userMiddleware,
  recruiterMiddleware,
  userRecruiterMiddleware,
  jobMiddleware,
);
const enhancer = composeWithDevTools(middlewares);

const store = createStore(
  // reducer
  rootReducer,
  // enhancer
  enhancer,
);

export default store;
