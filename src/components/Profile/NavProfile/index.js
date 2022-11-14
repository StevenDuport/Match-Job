import matchJob from 'src/assets/img/matchJob1.svg';
import { Link } from 'react-router-dom';
import './navProfile.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loadCards } from '../../../actions/feed';
import { loadProfileCandidate } from '../../../actions/profileCandidate';

const NavProfile = () => {
  const dispatch = useDispatch();
  const { roles, candidateId } = useSelector((state) => state.user);
  return (
    <nav className="profile_nav">
      { roles[0] === 'ROLE_CANDIDATE'
        ? ( candidateId === '' ? '' : (
            <Link
              to="/fil"
              className="profile_nav-return"
              onClick={(event) => {
                dispatch(loadCards());
                dispatch(loadProfileCandidate());
              }}
            >
              Fil
            </Link>
          )
        )
        : ''}
      <h1 className="profile_nav-title">MATCH-JOB</h1>
      <img className="profile_nav-img" src={matchJob} alt="logo" />
    </nav>
  );
};

export default NavProfile;
