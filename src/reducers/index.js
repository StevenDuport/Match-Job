import { combineReducers } from 'redux';
import reducerFeed from './reducerFeed';
import reducerProfileCandidate from './reducerProfileCandidate';
import reducerProfileRecruiter from './reducerProfileRecruiter';
import reducerUser from './reducerUser';
import reducerSelect from './reducerSelect';
import reducerJob from './reducerJob';

const rootReducer = combineReducers({
  user: reducerUser,
  profileCandidate: reducerProfileCandidate,
  profileRecruiter: reducerProfileRecruiter,
  feed: reducerFeed,
  select: reducerSelect,
  job: reducerJob,
});

export default rootReducer;
