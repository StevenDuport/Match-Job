import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadCards, loadCardsCandidate } from '../../actions/feed';
import { getUser, getUserRecruiter } from '../../actions/user';

import './insertLogin.scss';

const InsertLogin = () => {
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.user.roles);
  return (
    <div className="insertLogin">
      <p className="insertLogin_content">Authentification réussie</p>
      {
        (roles[0] === 'ROLE_CANDIDATE') && (
          <Link
            to="/profil"
            className="insertLogin_link"
            onClick={() => {
              dispatch(loadCards());
              dispatch(getUser());
            }}
          >
            ok
          </Link>
        )
      }
      {
        (roles[0] === 'ROLE_RECRUITER') && (
          <Link
            to="/profil"
            className="insertLogin_link"
            onClick={() => {
              dispatch(getUserRecruiter());
              dispatch(loadCardsCandidate());
            }}
          >
            ok
          </Link>
        )
      }
    </div>
  );
};
export default InsertLogin;
