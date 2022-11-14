import { useSelector } from 'react-redux';
import Popup from 'src/components/Popup';
import FeedCard from './FeedCard';
import FeedHeader from './FeedHeader';
import FeedNav from './FeedNav';
import FeedBoardCandidate from './FeedBoardCandidate';
import FeedBoardRecruiter from './FeedBoardRecruiter';
import FeedCardRecruiter from './FeedCardRecruiter';

import './feed.scss';

const Feed = () => {
  const { roles, isPopup } = useSelector((state) => state.user);
  return (
    <div className="feed">
      {isPopup && <Popup />}
      <FeedHeader />
      {(roles[0] === 'ROLE_CANDIDATE') && <FeedCard />}
      {(roles[0] === 'ROLE_RECRUITER') && <FeedCardRecruiter />}
      {(roles[0] === 'ROLE_CANDIDATE') && <FeedBoardCandidate />}
      {(roles[0] === 'ROLE_RECRUITER') && <FeedBoardRecruiter /> }
      <FeedNav />
    </div>
  );
};
export default Feed;
