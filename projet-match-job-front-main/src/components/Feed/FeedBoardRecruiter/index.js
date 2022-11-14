import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findJobs } from '../../../utils/functions';
import './feedBoardRecruiter.scss';
import { navigateOff } from '../../../actions/user';
import { saveIdJob, saveJobProfile } from '../../../actions/job';
import { isNotMatch } from '../../../actions/match';

const feedBoardRecruiter = () => {
  const dispatch = useDispatch();
  const feedNavToggle = useSelector((state) => state.feed.toggleFeedNav);
  const profileRecruiter = useSelector((state) => state.profileRecruiter.recruiterData);
  const params = useParams();
  const jobs = useSelector((state) => state.profileRecruiter.jobsRecruiterData);

  const currentJob = findJobs(jobs, params.slug);
  // console.log(currentJob);

  const matchs = currentJob.matchups;

  console.log(matchs);

  const match = matchs.filter((item) => (
    item.matchStatus === true
  ));

  console.log(match);

  const interested = matchs.filter((item) => (
    item.matchStatus === false && item.candidateStatus === true
  ));
  const technos = currentJob.technologies;
  return (
    <div
      className={feedNavToggle ? 'feedBoardRecruiter' : 'feedBoardRecruiter--none'}
    >
      <section className="feedBoardRecruiter_section">
        <Link
          to="/profil"
          className="feedBoardRecruiter_section-name"
        >
          {profileRecruiter.lastname} - {profileRecruiter.firstname}
        </Link>
        <h2>{profileRecruiter.company.companyName}</h2>
      </section>
      <section className="feedBoardRecruiter_section">
        <div className="feedBoardRecruiter_flex">
          <h2 className="feedBoardRecruiter-title">Mon offre :</h2>
          <Link
            to={`/job/edit/${currentJob.id}`}
            className="feedBoardRecruiter_section-add"
            onClick={(event) => {
              dispatch(saveIdJob(currentJob.id));
              dispatch(navigateOff());
              dispatch(saveJobProfile(currentJob));
            }}
          >
            <span className="feedBoardRecruiter_section-add--span">Modifier l'offre</span>+
          </Link>
        </div>
        <div className="feedBoardRecruiter_section--contain">
          <div className="feedBoardRecruiter_list">
            <ul>
              <li className="feedBoardRecruiter_list-item "><span className="spanItem">Intitulé du poste :</span> {currentJob.jobtitle.title}</li>
              <li className="feedBoardRecruiter_list-item "><span className="spanItem">Expérience : </span>{currentJob.experience.yearsNumber} ans</li>
              <li className="feedBoardRecruiter_list-item "><span className="spanItem">Contrat rechercher :</span> {currentJob.contract.name}</li>
              <li className="feedBoardRecruiter_list-item "><span className="spanItem">Salaire rechercher :</span> {currentJob.salary.name} K€</li>
              <ul className="feedBoardRecruiter_list-item "><span className="spanItem">Technos :</span>
                {technos.map((item) => (
                  <li key={item.technologyName} className="feedBoardRecruiter_list-techno ">- {item.technologyName}</li>
                ))}
              </ul>
            </ul>
          </div>
        </div>
      </section>
      <section className="feedBoardRecruiter_section">
        <h2 className="feedBoardRecruiter-title">Mes Matchs :</h2>
        <div className="feedBoardRecruiter_section--contain">
          <div className="feedBoardRecruiter_list">
            {match.map((item) => (
              <Link
                key={item.id}
                to={`/match/candidat/${item.candidate.id}`}
                className="feedBoardRecruiter_list-item "
                onClick={() => {
                  dispatch(saveIdJob(params.slug));
                  dispatch(isNotMatch());
                }}
              >
                - {item.candidate.lastName} {item.candidate.firstName}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="feedBoardRecruiter_section">
        <h2 className="feedBoardRecruiter-title">Les intéressées :</h2>
        <div className="feedBoardRecruiter_section--contain">
          <div className="feedBoardRecruiter_list">
            {interested.map((item) => (
              <Link
                key={item.id}
                to={`/interesse/candidat/${item.candidate.id}`}
                className="feedBoardRecruiter_list-item"
                onClick={() => {
                  dispatch(saveIdJob(params.slug));
                  dispatch(isNotMatch());
                }}
              >
                - {item.candidate.lastName} {item.candidate.firstName}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default feedBoardRecruiter;
