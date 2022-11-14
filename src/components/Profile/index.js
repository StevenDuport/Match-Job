import { useSelector } from 'react-redux';

import NavProfile from './NavProfile';
import ProfileCandidate from './ProfileCandidate';
import ProfileRecruiter from './ProfileRecruiter';
import './profile.scss';

const Profile = () => {
  const roles = useSelector((state) => state.user.roles);
  return (
    <div className="profile">
      <NavProfile />
      {(roles[0] === 'ROLE_CANDIDATE') && <ProfileCandidate />}
      {(roles[0] === 'ROLE_RECRUITER') && <ProfileRecruiter /> }
    </div>
  );
};

export default Profile;
