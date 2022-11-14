import matchJob from 'src/assets/img/matchJob1.svg';
import profilePicture from 'src/assets/img/profilePicture.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './feedHeader.scss';

const FeedHeader = () => {
  const roles = useSelector((state) => state.user.roles);
  const pictureCandidate = useSelector((state) => state.profileCandidate.candidateData.picture);

  const icon = (role, defaultPict, pictureCandidateF) => {
    let image;
    if (role[0] === '') {
      image = defaultPict;
    }
    else if (role[0] === 'ROLE_CANDIDATE' && pictureCandidateF === '') {
      image = defaultPict;
    }
    else if (role[0] === 'ROLE_CANDIDATE' && pictureCandidateF !== '') {
      image = pictureCandidateF;
    }

    return image;
  };

  return (
    <header className="feed_header">
      <img className="feed_header-logo" src={matchJob} alt="logo" />
      <h1 className="feed_header-title">MATCH-JOB</h1>
      <Link
        to="/profil"
      >
        { roles[0] === 'ROLE_CANDIDATE' && <img className="feed_header-imgProfile" src={icon(roles, profilePicture, pictureCandidate)} alt="profile" />}
      </Link>
    </header>
  );
};

export default FeedHeader;
