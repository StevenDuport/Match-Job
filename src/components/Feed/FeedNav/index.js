import { Link } from 'react-router-dom';
import { User, Plus } from 'react-feather';
import './feedNav.scss';
import 'src/components/Feed/FeedBoardCandidate/feedBoardCandidate.scss';
import { useDispatch } from 'react-redux';
import { toggleBoard } from '../../../actions/feed';

const FeedNav = () => {
  const dispatch = useDispatch();
  return (
    <div className="feedNav">
      <Link
        to="/profil"
        className="feedNav_button"
      >
        <User />
      </Link>
      <button
        type="button"
        className="feedNav_button"
        onClick={() => (dispatch(toggleBoard()))}
      >
        <Plus />
      </button>
    </div>
  );
};

export default FeedNav;
