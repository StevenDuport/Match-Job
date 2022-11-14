/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isNotMatch } from '../../../actions/match';

import './feedBoardCandidate.scss';
import '../FeedNav/feedNav.scss';

const FeedBoardCandidate = () => {
  const dispatch = useDispatch();
  const feedNavToggle = useSelector((state) => state.feed.toggleFeedNav);
  const candidateData = useSelector((state) => state.profileCandidate.candidateData);

  const matchupsR = candidateData.matchups;

  const interestedRecruiter = matchupsR.filter((item) => (
    item.candidateStatus === false
  ));

  const myMatch = matchupsR.filter((item) => (
    item.matchStatus === true
  ));
  return (
    <div
      className={feedNavToggle ? 'feedBoardCandidate' : 'feedBoardCandidate--none'}
    >
      <section className="feedBoardCandidate_section">
        <Link
          to="/profil"
          className="feedBoardCandidate_section-name"
        >
          {(candidateData === []) ? '-' : candidateData.firstName} {candidateData.lastName}
        </Link>
      </section>
      <section className="feedBoardCandidate_section">
        <h2 className="feedBoardCandidate-title">Mes Matchs :</h2>
        <div className="feedBoardCandidate_list">
          {myMatch.map((item) => (
            <Link
              key={item.id}
              to={`/match/recruteur/${item.job.id}`}
              className="feedBoardCandidate_list-item "
              onClick={() => (
                dispatch(isNotMatch())
              )}
            >
              {item.job.recruiter.company.companyName} - {item.job.recruiter.lastname} {item.job.recruiter.firstname}
            </Link>
          ))}
        </div>
      </section>
      <section className="feedBoardCandidate_section">
        <h2 className="feedBoardCandidate-title">Les intéressées :</h2>
        <div className="feedBoardCandidate_list">
          {interestedRecruiter.map((item) => (
            <Link
              key={item.id}
              to={`/interesse/recruteur/${item.job.id}`}
              className="feedBoardCandidate_list-item"
              onClick={() => (
                dispatch(isNotMatch())
              )}
            >
              {item.job.recruiter.company.companyName} - {item.job.recruiter.lastname} {item.job.recruiter.firstname}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeedBoardCandidate;
