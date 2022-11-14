import matchJob from 'src/assets/img/matchJob1.svg';
import { Link } from 'react-router-dom';
import { ArrowLeftCircle } from 'react-feather';
import { useDispatch } from 'react-redux';
import { loadProfileCandidate } from '../../../actions/profileCandidate';
import { isNotMatch } from '../../../actions/match';
import './profileCandidateNavEdit.scss';

const ProfileCandidateNavEdit = () => {
  const dispatch = useDispatch();
  return (
    <nav className="profile_navEdit">
      <Link
        to="/profil"
        className="profile_navEdit-return"
        onClick={(event) => {
          dispatch(loadProfileCandidate());
          dispatch(isNotMatch());
        }}
      >
        <ArrowLeftCircle size="2em" />
      </Link>
      <h1 className="profile_navEdit-title">MATCH-JOB</h1>
      <img className="profile_navEdit-img" src={matchJob} alt="logo" />
    </nav>
  );
}
export default ProfileCandidateNavEdit;
