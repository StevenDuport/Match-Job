import matchJob from 'src/assets/img/matchJob1.svg';
import { Link } from 'react-router-dom';
import { ArrowLeftCircle } from 'react-feather';
import { useDispatch } from 'react-redux';
import { loadProfileRecruiter } from '../../../actions/profileRecruiter';

import './profileRecruiterNavEdit.scss';
import { cleanInputJob } from '../../../actions/job';
import { isNotMatch } from '../../../actions/match';

const ProfileRecruiterNavEdit = () => {
  const dispatch = useDispatch();
  return (
    <nav className="profileRecruiter_navEdit">
      <Link
        to="/profil"
        className="profileRecruiter_navEdit-return"
        onClick={() => {
          dispatch(loadProfileRecruiter());
          dispatch(cleanInputJob());
          dispatch(isNotMatch());
        }}
      >
        <ArrowLeftCircle size="2em" />
      </Link>
      <h1 className="profileRecruiter_navEdit-title">MATCH-JOB</h1>
      <img className="profileRecruiter_navEdit-img" src={matchJob} alt="logo" />
    </nav>
  );
};

export default ProfileRecruiterNavEdit;
